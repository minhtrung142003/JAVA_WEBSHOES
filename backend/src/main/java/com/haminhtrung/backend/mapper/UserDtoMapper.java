package com.haminhtrung.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import com.haminhtrung.backend.dto.UserDto;
import com.haminhtrung.backend.entity.User;

@Mapper(componentModel = "spring") 
public interface UserDtoMapper {
    User toUser(UserDto userDto);
    void updateUser(@MappingTarget User user, UserDto userDto);
}
