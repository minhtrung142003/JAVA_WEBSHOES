package com.haminhtrung.backend.dto.mapper;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import com.haminhtrung.backend.dto.ProductDTO;
import com.haminhtrung.backend.entity.Product;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        imports = {Instant.class, List.class, ArrayList.class})
        
public interface ProductDtoMapper {
    ProductDTO getProductDTO(Product product);
    List<ProductDTO> getProductDTOs(List<Product> products);
    
}
