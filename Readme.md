# MY PORTFOLIO

### 1. Install Node/NPM
```sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
node --version
```

### 2. Install forever globally
```sh
npm install -g forever
git clone https://github.com/mightysood/myPortfolio.git
forever start server.js
```

### 3. Host node server on port 8080
```
git clone https://github.com/mightysood/myPortfolio.git
forever start server.js
```

### 4. Setup ufw firewall
```
sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)
```
### 5. Install NGINX and configure
```
sudo apt install nginx
sudo vim /etc/nginx/sites-available/default
```

### 6. Add the following to the location part of the server block
```
    server_name mightysood.com www.mightysood.com;

    location / {
        proxy_pass http://localhost:8080; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

### 7. Check NGINX config
```
sudo nginx -t
```

### 8. Restart NGINX
```
sudo service nginx restart
```


### 9. Add SSL with LetsEncrypt
```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --nginx -d mightysood.com -d www.mightysood.com
```

### 10. Only valid for 90 days, test the renewal process with
```
sudo certbot renew --dry-run
```

Now visit https://mightysood.com and you should see your Node app

