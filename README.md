# myherokuwp
Wordpress configured to work in heroku


## Further work
- Theme 
	- Parent totomo (ok)
	- Customize theme - child theme atp (ok)
		- todo more wip ..

- Setup content
	- Backup content
		- Export
		- Database

- Setup local
	- create db
	- config

- Image plugin
	- Auto resize file sizes



# Initial setup
Following are notes to initalize wordpress in heroku

## Download 
```sh
http://wordpress.org/latest.zip
unzip wordpress.zip
cd wordpress
mv wp-config-sample.php wp-config.php
```

## Source from a blog - about wordpress and heroku
*Reference*
https://ksylvest.com/posts/2014-05-02/deploying-wordpress-to-heroku

Find and replace the following in wp-config.php:


```sh
// ** MySQL settings - You can get this info from your web host ** //
$url = parse_url(getenv('DATABASE_URL') ? getenv('DATABASE_URL') : getenv('CLEARDB_DATABASE_URL'));

/** The name of the database for WordPress */
define('DB_NAME', trim($url['path'], '/'));

/** MySQL database username */
define('DB_USER', $url['user']);

/** MySQL database password */
define('DB_PASSWORD', $url['pass']);

/** MySQL hostname */
define('DB_HOST', $url['host']);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
```

```sh
define('AUTH_KEY',         getenv('AUTH_KEY'));
define('SECURE_AUTH_KEY',  getenv('SECURE_AUTH_KEY'));
define('LOGGED_IN_KEY',    getenv('LOGGED_IN_KEY'));
define('NONCE_KEY',        getenv('NONCE_KEY'));
define('AUTH_SALT',        getenv('AUTH_SALT'));
define('SECURE_AUTH_SALT', getenv('SECURE_AUTH_SALT'));
define('LOGGED_IN_SALT',   getenv('LOGGED_IN_SALT'));
define('NONCE_SALT',       getenv('NONCE_SALT'));
define('AWS_ACCESS_KEY_ID',     getenv('AWS_ACCESS_KEY_ID'));
define('AWS_SECRET_ACCESS_KEY', getenv('AWS_SECRET_ACCESS_KEY'));
```

## Deployment

Setup basic

```sh
git init
git add .
git commit -m "import"
heroku create
heroku addons:create cleardb
heroku addons:create sendgrid
```

Then set the following environment variables with new values (they can be generated [here]

```sh
heroku config:set AUTH_KEY=''
heroku config:set SECURE_AUTH_KEY=''
heroku config:set LOGGED_IN_KEY=''
heroku config:set NONCE_KEY=''
heroku config:set AUTH_SALT=''
heroku config:set SECURE_AUTH_SALT=''
heroku config:set LOGGED_IN_SALT=''
heroku config:set NONCE_SALT=''
```

Finally deploy the application

```sh
git push heroku master
heroku open
```

## Heroku PHP support
For wordpress to work on heroku, see following link, section Usage:
```sh
https://github.com/heroku/heroku-buildpack-php
```

If composer needed:
Install composer mac https://getcomposer.org/doc/00-intro.md


## Reference

*How to set multiple environment config* 
http://wptavern.com/wordpress-multi-environment-config-work-seamlessly-between-development-staging-and-production-sites

[here]: <https://api.wordpress.org/secret-key/1.1/salt/>
