package org.kmt.dao;

import org.kmt.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
//@RestResource
public interface CategorieRepository extends JpaRepository<Categorie, Long>{

}
