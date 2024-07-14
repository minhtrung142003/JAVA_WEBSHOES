package com.haminhtrung.backend.service.impl;

import com.haminhtrung.backend.entity.Color;
import com.haminhtrung.backend.repository.ColorRepository;
import com.haminhtrung.backend.service.ColorService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ColorServiceImpl implements ColorService {

    ColorRepository colorRepository;

    // get all 
    @Override
    public List<Color> getAllColors() {
        return colorRepository.findAll();
    }

    // get by id
    @Override
    public Color getColorById(Long id) {
        return colorRepository.findById(id).orElse(null);
    }

    // add
    @Override
    public Color createColor(Color color) {
        return colorRepository.save(color);
    }

    // put
    @Override
    public Color updateColor(Long id, Color color) {
        Color existingColor = colorRepository.findById(id).orElse(null);
        if (existingColor != null) {
            existingColor.setName(color.getName());
            return colorRepository.save(existingColor);
        }
        return null;
    }

    // delete
    @Override
    public void deleteColor(Long id) {
        colorRepository.deleteById(id);
    }
}
