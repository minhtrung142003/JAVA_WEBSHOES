package com.haminhtrung.backend.service;

import java.util.List;

import com.haminhtrung.backend.entity.Tag;

public interface TagService {
    Tag addTag(Tag tag);

    List<Tag> getAllTags();

    void deleteTag(Long tagId);
      public Tag updateTag(Tag tag);
}
