<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth_Model extends CI_Model {
    
    // Register new user
    public function register($name, $email, $password, $phone, $role)
    {
        $data = array(
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'phone' => $phone,
            'role' => $role
        );
        
        $this->db->insert('users', $data);
        
        return $this->db->insert_id(); 
    }
    
    // Login user by email
    public function login($email)
    {
        $this->db->where('email', $email);
        $query = $this->db->get('users');
        // $query = $this->db->from('users')->where('email', $email)->get();
        if ($query->num_rows() == 1)
        {
            return $query->row_array(); // Return user data
        }
        else
        {
            return FALSE;
        }
    }
    
    public function getUserDetail($user_id){
        $this->db->where('id', $user_id);
        $query = $this->db->get('users');
        return $query->result_array();
    }
    
    public function updateBasicDetails($userId, $name, $bio, $hometown) {
        $data = [
            'name' => $name,
            'bio' => $bio,
            'hometown' => $hometown,
        ];
    
        $this->db->where('id', $userId);
        return $this->db->update('users', $data); // Update only basic details
    }    

}
?>
