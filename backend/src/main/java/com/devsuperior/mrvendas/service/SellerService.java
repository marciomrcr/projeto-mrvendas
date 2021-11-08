package com.devsuperior.mrvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.mrvendas.dto.SellerDTO;
import com.devsuperior.mrvendas.entities.Seller;
import com.devsuperior.mrvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
		
	public List<SellerDTO> findAll(){
		 List<Seller> result = repository.findAll();
		 return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
	
}
