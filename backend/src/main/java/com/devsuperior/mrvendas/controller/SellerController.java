package com.devsuperior.mrvendas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.mrvendas.dto.SellerDTO;
import com.devsuperior.mrvendas.service.SellerService;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {
	
	@Autowired
	private SellerService service;
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll(){
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	}

