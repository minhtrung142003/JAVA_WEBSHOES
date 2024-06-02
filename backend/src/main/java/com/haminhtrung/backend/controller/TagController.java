package com.haminhtrung.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.haminhtrung.backend.entity.Tag;
import com.haminhtrung.backend.service.TagService;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/tags")
public class TagController {
    @Autowired
    private TagService tagService;

    // get all tags
    @GetMapping
    public ResponseEntity<List<Tag>> getAllTags() {
        List<Tag> tags = tagService.getAllTags();
        return ResponseEntity.ok(tags);
    }

    // get tag theo id
    @GetMapping("/{id}")
    public ResponseEntity<Tag> getTagById(@PathVariable("id") Long tagId) {
        Tag tag = tagService.getTagById(tagId);
        if (tag != null) {
            return new ResponseEntity<>(tag, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // post tag
    @PostMapping
    public ResponseEntity<Tag> addTag(@RequestBody Tag tag) {
        Tag addedTag = tagService.addTag(tag);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedTag);
    }

    // put tag
    @PutMapping("{id}")
    public ResponseEntity<Tag> updateTag(@PathVariable("id") Long tagId,
            @RequestBody Tag Tag) {
        Tag.setId(tagId);
        Tag updateTag = tagService.updateTag(Tag);
        return new ResponseEntity<>(updateTag, HttpStatus.OK);
    }

    // delete tag
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTag(@PathVariable("id") Long tagId) {
        tagService.deleteTag(tagId);
        return ResponseEntity.noContent().build();
    }

}
