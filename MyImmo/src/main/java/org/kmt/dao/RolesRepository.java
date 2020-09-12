package org.kmt.dao;

import org.kmt.entities.RoleUtilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
//@RestResource
public interface RolesRepository extends JpaRepository<RoleUtilisateur, Long>{

}
