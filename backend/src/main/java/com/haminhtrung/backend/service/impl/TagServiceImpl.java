package com.haminhtrung.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.haminhtrung.backend.entity.Tag;
import com.haminhtrung.backend.entity.Tag;
import com.haminhtrung.backend.repository.TagRepository;
import com.haminhtrung.backend.service.TagService;

import java.util.List;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    public Tag addTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Override
    public void deleteTag(Long tagId) {
        tagRepository.deleteById(tagId);
    }

      @Override
    public Tag updateTag(Tag tag){
        Tag existingTag = tagRepository.findById(tag.getId()).get();
        existingTag.setName(tag.getName());
        existingTag.setIcon(tag.getIcon());
        Tag updatedTag = tagRepository.save(existingTag);
        return updatedTag;
    }
}
