package com.haminhtrung.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.haminhtrung.backend.entity.Visitor;
import com.haminhtrung.backend.service.VisitorService;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("/api/visitors")
public class VisitorController {

    @Autowired
    private VisitorService visitorService;

    @GetMapping
    public List<Visitor> getAllVisitors() {
        return visitorService.getAllVisitors();
    }

    @GetMapping("/{id}")
    public Visitor getVisitorById(@PathVariable Long id) {
        return visitorService.getVisitorById(id);
    }

    @PostMapping
    public Visitor addVisitor(@RequestBody Visitor visitor) {
        return visitorService.addVisitor(visitor);
    }

    @PutMapping("/{id}")
    public Visitor updateVisitor(@PathVariable Long id, @RequestBody Visitor visitor) {
        return visitorService.updateVisitor(id, visitor);
    }

    @DeleteMapping("/{id}")
    public void deleteVisitor(@PathVariable Long id) {
        visitorService.deleteVisitor(id);
    }

    @GetMapping("/date")
    public Visitor getVisitorByDate(@RequestParam Date date) {
        return visitorService.getVisitorByDate(date);
    }
}
