package com.haminhtrung.backend.controller;

import com.haminhtrung.backend.entity.Size;
import com.haminhtrung.backend.service.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/sizes")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
public class SizeController {

    @Autowired
    private SizeService sizeService;

    // get all size
    @GetMapping
    public ResponseEntity<List<Size>> getAllSizes() {
        List<Size> sizes = sizeService.getAllSizes();
        return ResponseEntity.ok(sizes);
    }

    // get size by id
    @GetMapping("/{id}")
    public ResponseEntity<Size> getSizeById(@PathVariable("id") Long id) {
        Size size = sizeService.getSizeById(id);
        return size != null ? ResponseEntity.ok(size) : ResponseEntity.notFound().build();
    }

    // add size
    @PostMapping
    public ResponseEntity<Size> createSize(@RequestBody Size size) {
        Size createdSize = sizeService.createSize(size);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSize);
    }

    // put size
    @PutMapping("/{id}")
    public ResponseEntity<Size> updateSize(@PathVariable("id") Long id, @RequestBody Size size) {
        Size updatedSize = sizeService.updateSize(id, size);
        return updatedSize != null ? ResponseEntity.ok(updatedSize) : ResponseEntity.notFound().build();
    }

    // delete size
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSize(@PathVariable("id") Long id) {
        sizeService.deleteSize(id);
        return ResponseEntity.noContent().build();
    }
}
