package org.kmt.dao;

import org.kmt.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
@RestResource
public interface CategorieRepository extends JpaRepository<Categorie, Long>{

}
