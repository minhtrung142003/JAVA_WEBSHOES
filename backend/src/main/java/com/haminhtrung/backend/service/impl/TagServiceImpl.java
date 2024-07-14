package com.haminhtrung.backend.service.impl;

import org.springframework.stereotype.Service;
import com.haminhtrung.backend.entity.Tag;
import com.haminhtrung.backend.repository.TagRepository;
import com.haminhtrung.backend.service.TagService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TagServiceImpl implements TagService {

    TagRepository tagRepository;

    // get all tags
    @Override
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    // get id
    @Override
    public Tag getTagById(Long tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        return optionalTag.get();
    }

    // add tag
    @Override
    public Tag addTag(Tag tag) {
        return tagRepository.save(tag);
    }

    // put tag
    @Override
    public Tag updateTag(Tag tag) {
        Tag existingTag = tagRepository.findById(tag.getId()).get();
        existingTag.setName(tag.getName());
        existingTag.setIcon(tag.getIcon());
        Tag updatedTag = tagRepository.save(existingTag);
        return updatedTag;
    }

    // delete tag
    @Override
    public void deleteTag(Long tagId) {
        tagRepository.deleteById(tagId);
    }

}
