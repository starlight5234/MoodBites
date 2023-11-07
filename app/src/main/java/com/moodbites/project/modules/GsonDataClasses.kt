package com.moodbites.project.modules

import com.google.gson.annotations.SerializedName

data class User(
    @SerializedName("email")
    val email: String,
    @SerializedName("pass")
    val pass: String
)

data class LoginResponse(
    @SerializedName("login")
    val login: String
)