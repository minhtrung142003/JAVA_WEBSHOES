package com.haminhtrung.backend.service.impl;

import com.haminhtrung.backend.entity.Size;
import com.haminhtrung.backend.repository.SizeRepository;
import com.haminhtrung.backend.service.SizeService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class SizeServiceImpl implements SizeService {

    SizeRepository sizeRepository;

    // get all
    @Override
    public List<Size> getAllSizes() {
        return sizeRepository.findAll();
    }

    // get by id
    @Override
    public Size getSizeById(Long id) {
        return sizeRepository.findById(id).orElse(null);
    }

    // add
    @Override
    public Size createSize(Size size) {
        return sizeRepository.save(size);
    }

    // put
    @Override
    public Size updateSize(Long id, Size size) {
        Size existingSize = sizeRepository.findById(id).orElse(null);
        if (existingSize != null) {
            existingSize.setName(size.getName());
            return sizeRepository.save(existingSize);
        }
        return null;
    }

    // delete
    @Override
    public void deleteSize(Long id) {
        sizeRepository.deleteById(id);
    }
}
