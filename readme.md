Loads *.csv files to Everbridge SFTP, for customers and employees.

Views in Munis:
avl.PR_City_Employees_Everbridge
avl.UB_Water_Customers_Everbridge


Master branch is deployed on ec2.

deploy.example.sh is an example of how it might be deployed to Lambda

|              | |          |
|--------------|-|----------|
| index        | |          |
|   v          | |          |
| loadAFile    |>|quoteCell |
|   v          | |          |
| GetRows      |>|quoteCell |
|   v          | |          |
| FtpStep      | |          |