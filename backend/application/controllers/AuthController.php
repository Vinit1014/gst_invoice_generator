<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AuthController extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            http_response_code(200);  // Respond with HTTP OK status
            exit;  // Terminate the script after the preflight response
        }
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->model('Auth_Model'); // Load the model
        $this->load->library('form_validation'); // Load form validation library
        $this->load->helper('cookie');
    }

    public function checkUser()
    {
        echo json_encode(['status' => 'SADSF', 'message' => 'FSDLGJSK']);
    }

    // Handle registration form submission
    public function register_user()
    {
        // Validation for registration form
        $postData = json_decode(file_get_contents('php://input'), true); // Get JSON input

        // Get user data
        $name = $postData['name'];
        $email = $postData['email'];
        $password = $postData['password'];
        $phone = $postData['phone'];
        $role = $postData['role'];
        // $email = $this->input->post('email');
        $password = password_hash($password, PASSWORD_DEFAULT);

        // Save user to database
        $user_id = $this->Auth_Model->register($name, $email, $password, $phone, $role);
        
        if ($user_id) {
            // Store user_id in session
            $this->session->set_userdata('user_id', $user_id);

            // Send success response
            echo json_encode(['status' => 'success', 'message' => 'User registered successfully.', 'userId' => $user_id]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to register user.']);
        }
    }

    // Handle login form submission
    public function login_user()
    {
        // Decode JSON input
        $postData = json_decode(file_get_contents('php://input'), true);
        // Extract email and password from postData
        $email = $postData['email'];
        $password = $postData['password'];
        // Check if user exists using the Auth_model
        $user = $this->Auth_Model->login($email);

        if ($user) {
            // Use password_verify for secure password checking
            // if ($password==$user['password']) {
            if (password_verify($password, $user['password'])) {

                // Set cookie (example configuration)
                $cookie = array(
                    'name'   => 'user_id',
                    'value'  => $user['id'],
                    'expire' => '3600', // 1 hour
                    'path'   => '/',
                    'secure' => FALSE, // Set to TRUE if using HTTPS
                    'httponly' => TRUE
                );
                $this->input->set_cookie($cookie);
                // Return success message
                echo json_encode(['status' => 'success', 'message' => "User logged in successfully", "user" => $user]);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Invalid password']);
            }
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid email or user not found',
                'email' => $email,
                'password' => $password,
                'user' => $user
            ]);
        }
    }

    // Logout
    public function logout()
    {
        // Check if the user is logged in
        $user_id = $this->session->userdata('user_id');

        if ($user_id) {
            // Unset all session data
            $this->session->unset_userdata('user_id');
            $this->session->unset_userdata('user');

            // Destroy the session
            $this->session->sess_destroy();

            // Respond with a success message
            echo json_encode(['status' => 'success', 'message' => 'You have been logged out successfully.']);
        } else {
            // User is not logged in, send an error message
            echo json_encode(['status' => 'error', 'message' => 'No active session found.']);
        }
    }
}
