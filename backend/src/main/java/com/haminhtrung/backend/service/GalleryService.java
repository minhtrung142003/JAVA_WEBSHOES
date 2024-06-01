package com.haminhtrung.backend.service;

import com.haminhtrung.backend.entity.Gallery;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface GalleryService {
    Gallery saveImage(Long productId, MultipartFile file, int i);

    Gallery getGalleryById(Long galleryId);

    List<Gallery> getAllGalleries();

    List<Gallery> saveImages(Long productId, MultipartFile[] files);

    List<Gallery> getImagesByProductId(Long productId);

    public void deleteGallery(Long galleryId);

    void update(Long productId, MultipartFile[] newFiles);

}
