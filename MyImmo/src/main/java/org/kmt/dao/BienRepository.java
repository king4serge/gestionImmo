package org.kmt.dao;

import org.kmt.entities.Bien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestResource
@CrossOrigin("*")
public interface BienRepository extends JpaRepository<Bien, Long>{

}
