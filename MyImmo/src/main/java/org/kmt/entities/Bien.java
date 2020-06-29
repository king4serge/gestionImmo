package org.kmt.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Bien implements Serializable{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 100)
	private String nom;
	private String description;
	@Column(name = "url_photo", length = 50)
	private String urlPhoto;
	private double prix;
	private int quantite;
	private boolean active;
	private double latitude, longitude, altitude;
	@ManyToOne
	@JoinColumn(name = "categorie_id", nullable = false)
	private Categorie categorie;

}
