package com.haminhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
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
@AllArgsConstructor
public class GalleryServiceImpl implements GalleryService {

    private GalleryRepository galleryRepository;

    private ProductRepository productRepository;

    private final String UPLOAD_DIR = "E:/WEB_SPRINGBOOT/JAVA_WEBSHOES/backend/src/main/resources/static/upload";

    // save image
    @Override
    public Gallery saveImage(Long productId, MultipartFile file, int i) {
        try {
            // Lấy tên gốc của tệp tin ảnh
            String originalFileName = file.getOriginalFilename();

            // Tạo một UUID để thêm vào tên tệp tin để đảm bảo tính duy nhất
            String uuid = UUID.randomUUID().toString();

            // Lấy phần mở rộng của tên tệp tin (ví dụ: .jpg, .png)
            String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));

            // Tạo tên tệp tin mới bằng cách kết hợp UUID và phần mở rộng của tệp tin gốc
            String newFileName = i + uuid + fileExtension;

            // Tạo đường dẫn tuyệt đối tới thư mục upload
            Path uploadPath = Paths.get(UPLOAD_DIR);

            // Kiểm tra nếu thư mục upload không tồn tại, tạo mới
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Tạo đường dẫn đến tệp tin ảnh
            Path filePath = uploadPath.resolve(newFileName);

            // Ghi dữ liệu từ file được upload vào đường dẫn đã tạo
            Files.write(filePath, file.getBytes());

            // Tìm sản phẩm dựa trên productId
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            // Tạo đối tượng Gallery và lưu vào cơ sở dữ liệu
            Gallery gallery = new Gallery();
            gallery.setProduct(product);
            gallery.setImagePath(newFileName); // Sử dụng tên tệp tin mới
            return galleryRepository.save(gallery);
        } catch (IOException e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage(), e);
        }
    }

    // ----------------------------------------------------------------
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
        // Xóa toàn bộ ảnh cũ của sản phẩm
        deleteGallery(productId);

        // Lưu ảnh mới
        saveImages(productId, newFiles);
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

    private void deleteImage(String imagePath) {
        // Xóa ảnh từ thư mục hoặc lưu trữ ảnh bên ngoài
        Path imagePathToDelete = Paths.get(UPLOAD_DIR).resolve(imagePath);
        try {
            Files.deleteIfExists(imagePathToDelete);
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete image: " + imagePath, e);
        }
    }

}