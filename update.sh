rm deploy.zip 2> /dev/null

7z a -r -tzip deploy.zip index.js everbridge_cust_rsa everbridge_emp_rsa node_modules/*

aws lambda update-function-code --function-name everbridge_interface --zip-file fileb://deploy.zip

# aws lambda update-function-configuration --function-name everbridge_interface \

# aws lambda delete-function --function-name everbridge_interface