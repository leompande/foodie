<?php
use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Database\Eloquent\Model;

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();

        // new users users array
        $admin   = array(
            'name' => 'Leonard Mpande',
            'email' => 'leo@gmail.com',
            'password' => 'superuser',
            'role' => 'admin',
        );
        $userOne = array(
            'name' => 'theDiz Admin',
            'email' => 'thediz@gmail.com',
            'password' => 'dizAmin',
            'role' => 'restaurant',
        );
        $userTwo = array(
            'name' => 'catalunya',
            'email' => 'cat@gmail.com',
            'password' => 'catAdmin',
            'role' => 'restaurant',
        );
        $userThree   = array(
            'name' => 'millenium',
            'email' => 'millenium@gmail.com',
            'password' => 'milleniumAdmin',
            'role' => 'restaurant',
        );
        $userFour    = array(
            'name' => 'stella malis',
            'email' => 'stella@gmail.com',
            'password' => 'stellaAdmin',
            'role' => 'restaurant',
        );
        $userFive    = array(
            'name' => 'badeco',
            'email' => 'badeco@gmail.com',
            'password' => 'badecoAdmin',
            'role' => 'restaurant',
        );
        $userSix     = array(
            'name' => 'malaika',
            'email' => 'malaika@gmail.com',
            'password' => 'malaikaAdmin',
            'role' => 'restaurant',
        );
        User::create($admin);
        User::create($userOne);
        User::create($userTwo);
        User::create($userThree);
        User::create($userFour);
        User::create($userFive);
        User::create($userSix);
    }

}