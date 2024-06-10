package com.haminhtrung.backend.service;

import java.util.List;
import com.haminhtrung.backend.entity.Size;

public interface SizeService {
    List<Size> getAllSizes();

    Size getSizeById(Long id);

    Size createSize(Size size);

    Size updateSize(Long id, Size size);

    void deleteSize(Long id);
}
