package org.kmt.dao;

import org.kmt.entities.Bien;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
public interface BienRepository extends JpaRepository<Bien, Long>{
	@RestResource(path = "categorieId")
	Page<Bien> findByCategorieId(@Param("id") Long id, Pageable pageable);
	
	@RestResource(path = "searchbykeyword")
	Page<Bien> findByNomContaining(@Param("nom") String keyword, Pageable pageable);

}
