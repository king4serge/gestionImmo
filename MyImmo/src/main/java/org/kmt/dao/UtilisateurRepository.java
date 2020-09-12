package org.kmt.dao;

import org.kmt.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
//@RestResource
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long>{
	

}
