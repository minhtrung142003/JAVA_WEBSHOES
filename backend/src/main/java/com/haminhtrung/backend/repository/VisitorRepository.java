package com.haminhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.haminhtrung.backend.entity.Visitor;
import java.util.Date;
import java.util.Optional;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Long> {
    Optional<Visitor> findByVisitDate(Date visitDate);
    
    @Query("SELECT COUNT(v) FROM Visitor v")
    int countVisitors();

    Optional<Visitor> findFirstByOrderByVisitDateDesc();
}
