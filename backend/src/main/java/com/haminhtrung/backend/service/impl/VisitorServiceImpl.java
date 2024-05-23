package com.haminhtrung.backend.service.impl;

import com.haminhtrung.backend.entity.Visitor;
import com.haminhtrung.backend.repository.VisitorRepository;
import com.haminhtrung.backend.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
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

    @Override
    public int getVisitorsCount() {
        return visitorRepository.countVisitors();
    }
    @Override
    public int incrementVisitorsCount() {
        // Lấy số lượng người truy cập hiện tại
        Visitor latestVisitor = visitorRepository.findFirstByOrderByVisitDateDesc().orElse(null);
        int currentCount = (latestVisitor != null) ? latestVisitor.getVisitorCount() : 0;
        // Tăng số lượng người truy cập lên 1 và lưu vào cơ sở dữ liệu
        int newCount = currentCount + 1;
        visitorRepository.save(new Visitor(new Date(), newCount));
        return newCount;
    }

}
