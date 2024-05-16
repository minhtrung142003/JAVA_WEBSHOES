package com.haminhtrung.backend.service.impl;

import com.haminhtrung.backend.entity.Visitor;
import com.haminhtrung.backend.repository.VisitorRepository;
import com.haminhtrung.backend.service.VisitorService;

import lombok.AllArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor
public class VisitorServiceImpl implements VisitorService {

    @Autowired
    private VisitorRepository visitorRepository;

    @Override
    public List<Visitor> getAllVisitors() {
        return visitorRepository.findAll();
    }

    @Override
    public Visitor getVisitorById(Long id) {
        return visitorRepository.findById(id).orElse(null);
    }

    @Override
    public Visitor addVisitor(Visitor visitor) {
        return visitorRepository.save(visitor);
    }

    @Override
    public Visitor updateVisitor(Long id, Visitor visitor) {
        Optional<Visitor> existingVisitor = visitorRepository.findById(id);
        if (existingVisitor.isPresent()) {
            Visitor updatedVisitor = existingVisitor.get();
            updatedVisitor.setVisitDate(visitor.getVisitDate());
            updatedVisitor.setVisitorCount(visitor.getVisitorCount());
            return visitorRepository.save(updatedVisitor);
        } else {
            return null;
        }
    }

    @Override
    public void deleteVisitor(Long id) {
        visitorRepository.deleteById(id);
    }

    @Override
    public Visitor getVisitorByDate(Date date) {
        return visitorRepository.findByVisitDate(date).orElse(null);
    }
}