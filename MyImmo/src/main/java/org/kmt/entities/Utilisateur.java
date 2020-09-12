package org.kmt.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Utilisateur implements Serializable{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 100)
	private String nom;
	@Column(length = 100)
	private String prenom;
	@Column(length = 25)
	private String telephone;
	@Column(length = 30)
	private String email;
	@Column(length = 50)
	private String photo;
	@OneToMany(mappedBy = "utilisateur")
	//@JoinColumn(name = "role_id", nullable = false)
	private Collection<RoleUtilisateur> role;

}
