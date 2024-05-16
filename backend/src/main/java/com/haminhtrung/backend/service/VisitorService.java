package com.haminhtrung.backend.service;

import java.util.Date;
import java.util.List;

import com.haminhtrung.backend.entity.Visitor;

public interface VisitorService {
    List<Visitor> getAllVisitors();
    Visitor getVisitorById(Long id);
    Visitor addVisitor(Visitor visitor);
    Visitor updateVisitor(Long id, Visitor visitor);
    void deleteVisitor(Long id);
    Visitor getVisitorByDate(Date date);
}
