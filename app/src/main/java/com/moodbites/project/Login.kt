package com.moodbites.project

import android.annotation.SuppressLint
import android.app.AlertDialog
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.MotionEvent
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import com.google.gson.Gson
import com.moodbites.project.modules.LoginResponse
import com.moodbites.project.modules.Modules
import com.moodbites.project.modules.User
import okhttp3.Call
import okhttp3.Callback
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import okhttp3.Response
import java.io.File
import java.io.FileInputStream
import java.io.FileWriter
import java.io.IOException
import java.io.PrintWriter

class Login : AppCompatActivity() {
    @SuppressLint("ClickableViewAccessibility")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        // Online Checker AlertDialog
        if (!Modules.isOnline(applicationContext)){
            val builder: AlertDialog.Builder = AlertDialog.Builder(this)
            builder.setTitle("No Internet Connection!").setMessage("Device is not connected to Internet").setCancelable(false)
                .setPositiveButton("Okay!"){_,_ ->
                    finishAffinity()
                }
            builder.show()
        }

        val loginJSON = File(applicationContext.cacheDir, "login.json")

        if (loginJSON.exists()) {
            autoLogin()
        }

        //forgot password button
        val forgotButton = findViewById<TextView>(R.id.forgotPass)
        forgotButton.setOnClickListener {
            val toDoToast = Toast.makeText(this, "To Do", Toast.LENGTH_SHORT)
            toDoToast.show()
        }

        val signUp = findViewById<TextView>(R.id.signUp)
        signUp.setOnClickListener {
            val toDoToast = Toast.makeText(this, "To Do", Toast.LENGTH_SHORT)
            toDoToast.show()
        }

        val loginButton = findViewById<Button>(R.id.loginButton)
        val username = findViewById<EditText>(R.id.username)
        val password = findViewById<EditText>(R.id.password)
        var isVisible = false

        password.setOnTouchListener { _, event ->
            val DRAWABLE_LEFT = 0

            if (event.action == MotionEvent.ACTION_UP) {
                if (event.rawX <= (password.left + password.paddingLeft + password.compoundDrawables[DRAWABLE_LEFT].bounds.width())) {
                    if (!isVisible){
                        password.transformationMethod = HideReturnsTransformationMethod.getInstance()
                        isVisible = true
                    } else {
                        password.transformationMethod = PasswordTransformationMethod.getInstance()
                        isVisible = false
                    }
                    password.setSelection(password.text.length)
                    return@setOnTouchListener true
                }
            }
            false
        }

        // Initialize http client for server
        val okHttpClient = OkHttpClient()

        loginButton.setOnClickListener {

            if (username.text.toString().isEmpty()){
                return@setOnClickListener
            }
            if (password.text.toString().isEmpty()){
                return@setOnClickListener
            }

            // Initialize gson object
            val gson = Gson()

            // Convert user input data into a json to transmit to server
            val jsonString = gson.toJson(User(username.text.toString(), password.text.toString()))

            // Save user input data to userdata.json
            val userdataJSON = File(applicationContext.cacheDir, "userdata.json")

            // Save response to login.json
            val loginJSON = File(applicationContext.cacheDir, "login.json")

            println("Login query requested!")

            // Send JSON request to server
            val link = Modules.ipAddress.plus("api/login")

            val mediaType = "application/json; charset=utf-8".toMediaType()
            val req = jsonString.toRequestBody(mediaType)
            val request = Request.Builder()
                .url(link)
                .post(req)
                .build()

            // Async call to server
            okHttpClient.newCall(request).enqueue(object : Callback {
                override fun onFailure(call: Call, e: IOException) {
                    println(e)
                    call.cancel()
                    Handler(Looper.getMainLooper()).post {
                        Toast.makeText(
                            applicationContext,
                            "Server Unavailable",
                            Toast.LENGTH_LONG
                        ).show()
                    }
                }

                override fun onResponse(call: Call, response: Response) {
                    response.use {
                        // Store JSON response sent by server as a string
                        val responseString =
                            gson.fromJson(response.body?.string(), LoginResponse::class.java)

                        // delete existing userdata.json
                        if (userdataJSON.exists()) {
                            userdataJSON.delete()
                            loginJSON.delete()
                        }

                        // Write user entered data to userdata.json
                        try {
                            PrintWriter(FileWriter(userdataJSON)).use {
                                it.write(jsonString)
                            }
                        } catch (e: Exception) {
                            e.printStackTrace()
                        }

                        // Write server's login response to login.json
                        try {
                            PrintWriter(FileWriter(loginJSON)).use {
                                if (responseString.toString().isNotEmpty()) {
                                    it.write(gson.toJson(responseString))
                                }
                            }
                        } catch (e: Exception) {
                            e.printStackTrace()
                        }

                        // Read login.json
                        val responseJSON =
                            FileInputStream(loginJSON).bufferedReader().use { it.readText() }

                        // Convert file into JSON object for easy access
                        val loginInfo = gson.fromJson(responseJSON, LoginResponse::class.java)
                        // Check what login.json contains
                        // null -> Server didn't respond (501)
                        // success -> Login granted
                        // failed -> Login denied (password mismatch)
                        // 404/anything else -> Missing user in login DB
                        if (responseJSON.isNotEmpty()) {
                            println("Login: ".plus(loginInfo.login))
                            when (loginInfo.login.lowercase()) {
                                "success" -> {
                                        val loadIntent =
                                            Intent(applicationContext, HomeScreen::class.java)
                                        finishAffinity()
                                        startActivity(loadIntent)
                                }
                                "failed" -> {
                                    Handler(Looper.getMainLooper()).post {
                                        Toast.makeText(
                                            applicationContext,
                                            "Login Failed, please check your password!",
                                            Toast.LENGTH_LONG
                                        )
                                            .show()
                                    }
                                }
                                else -> {
                                    Handler(Looper.getMainLooper()).post {
                                        Toast.makeText(
                                            applicationContext,
                                            "Login Failed, user not found",
                                            Toast.LENGTH_LONG
                                        )
                                            .show()
                                    }
                                }
                            }
                        } else {
                            // Domain is available but backend is not running
                            Handler(Looper.getMainLooper()).post {
                                Toast.makeText(
                                    applicationContext,
                                    "501 - Internal Server Error",
                                    Toast.LENGTH_LONG
                                ).show()
                            }
                        }
                    }
                }
            })
        }

        onBackPressedDispatcher.addCallback(this, object: OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                finishAfterTransition()
                overridePendingTransition(android.R.transition.slide_bottom, android.R.transition.slide_top)
            }
        })
    }

    private fun autoLogin(){
        val loginJSON = File(applicationContext.cacheDir, "login.json")

        val inputAsString = FileInputStream(loginJSON).bufferedReader().use { it.readText() }
        val loginInfo = Gson().fromJson(inputAsString, LoginResponse::class.java)

        if (inputAsString.isNotEmpty()) {
            if (loginInfo.login.lowercase() == "success") {
                val loadIntent = Intent(applicationContext, HomeScreen::class.java)
                finishAffinity()
                startActivity(loadIntent)
            } else {
                Handler(Looper.getMainLooper()).post {
                    Toast.makeText(
                        applicationContext,
                        "Login Failed",
                        Toast.LENGTH_LONG
                    )
                        .show()
                }
            }
        }
    }
}