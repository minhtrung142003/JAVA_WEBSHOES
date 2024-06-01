package com.haminhtrung.backend.controller;

import com.haminhtrung.backend.entity.Visitor;
import com.haminhtrung.backend.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
@RequestMapping("/api/visitors")
public class VisitorController {

    @Autowired
    private VisitorService visitorService;

    // get all
    @GetMapping
    public List<Visitor> getAllVisitors() {
        return visitorService.getAllVisitors();
    }

    // get visitor by id
    @GetMapping("/{id}")
    public Visitor getVisitorById(@PathVariable Long id) {
        return visitorService.getVisitorById(id);
    }
    
    // get count visitor
    @GetMapping("/count")
    public int getVisitorsCount() {
        return visitorService.getVisitorsCount();
    }

    // post 
    @PostMapping
    public Visitor addVisitor(@RequestBody Visitor visitor) {
        return visitorService.addVisitor(visitor);
    }

    // post quantity visitor
    @PostMapping("/increment")
    public int incrementVisitorsCount() {
        return visitorService.incrementVisitorsCount();
    }

    // put
    @PutMapping("/{id}")
    public Visitor updateVisitor(@PathVariable Long id, @RequestBody Visitor visitor) {
        return visitorService.updateVisitor(id, visitor);
    }

    // delete
    @DeleteMapping("/{id}")
    public void deleteVisitor(@PathVariable Long id) {
        visitorService.deleteVisitor(id);
    }

}
