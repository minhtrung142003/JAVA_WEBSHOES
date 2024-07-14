package com.haminhtrung.backend.service.impl;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.haminhtrung.backend.repository.GalleryRepository;
import com.haminhtrung.backend.repository.ProductRepository;
import com.haminhtrung.backend.entity.Gallery;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.service.GalleryService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class GalleryServiceImpl implements GalleryService {

    GalleryRepository galleryRepository;

    ProductRepository productRepository;

    final String UPLOAD_DIR = "E:/WEB_REACT_JavaSpring/JAVA_WEBSHOES/backend/src/main/resources/static/upload";

    // save 1 image
    @Override
    public Gallery saveImage(Long productId, MultipartFile file, int i) {
        try {
            String originalFileName = file.getOriginalFilename();
            String uuid = UUID.randomUUID().toString();
            String fileExtension = originalFileName.substring(originalFileName.lastIndexOf(".")); // get .file(jpg or // png)
            String newFileName = i + uuid + fileExtension;
            Path uploadPath = Paths.get(UPLOAD_DIR); // create url tới upload
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            Path filePath = uploadPath.resolve(newFileName);
            Files.write(filePath, file.getBytes());
            // filter by productid
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            Gallery gallery = new Gallery();
            gallery.setProduct(product);
            gallery.setImagePath(newFileName);
            return galleryRepository.save(gallery);
        } catch (IOException e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage(), e);
        }
    }

    // save many images
    @Override
    public List<Gallery> saveImages(Long productId, MultipartFile[] files) {
        List<Gallery> galleries = new ArrayList<>();
        int i = 0;
        for (MultipartFile file : files) {
            galleries.add(saveImage(productId, file, i));
            i++;
        }
        return galleries;
    }

    // get gallery by id
    @Override
    public Gallery getGalleryById(Long galleryId) {
        Optional<Gallery> optionalGallery = galleryRepository.findById(galleryId);
        return optionalGallery.get();
    }

    // get all gallery
    @Override
    public List<Gallery> getAllGalleries() {
        return galleryRepository.findAll();
    }

    // get image by productid
    @Override
    public List<Gallery> getImagesByProductId(Long productId) {
        return galleryRepository.findByProductId(productId);
    }

    // update image by productid
    @Override
    public void update(Long productId, MultipartFile[] newFiles) {
        deleteGallery(productId);
        saveImages(productId, newFiles); // save image new
    }

    // delete gallery
    @Override
    public void deleteGallery(Long productId) {
        List<Gallery> galleries = galleryRepository.findByProductId(productId);
        for (Gallery gallery : galleries) {
            deleteImage(gallery.getImagePath());
            galleryRepository.delete(gallery);
        }
    }

    // delete image từ folder or save image outside
    private void deleteImage(String imagePath) {
        Path imagePathToDelete = Paths.get(UPLOAD_DIR).resolve(imagePath);
        try {
            Files.deleteIfExists(imagePathToDelete);
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete image: " + imagePath, e);
        }
    }
}