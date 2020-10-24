---
title: MySQL
description: Documentation for BlueG's MySQL plugin version R41-4
sidebar_label: MySQL
---

#MySQL/R41-4
==========

Documentation for BlueG's MySQL plugin version R41-4
==========

ORM functions:
==========
* [orm_create](#orm_create) 
* [orm_destroy](#orm_destroy)
* [orm_errno](#orm_errno)
* [orm_apply_cache](#orm_apply_cache)

##orm_create
==========
**Description:**
>Creates an ORM instance and returns its id.

**Parameters:**
```bash
(const table[], MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`const table[]` The name of the table you wish to control.

`MySQL:handle`  The connection handle this will be processed on (optional).

**Return Values:**
>ORM id on success, 0 on failure.
------------
```pawn
public OnPlayerConnect(playerid)
{
	new ORM:orm = Player[playerid][ORM_ID] = orm_create("players");
	return 1;
}
```
------------
##orm_destroy
==========
**Description:**
>Destroys an ORM instance.

**Parameters:**
```bash
(ORM:id)
```
`ORM:id	` 	The id of the ORM instance.

**Return Values:**
1 on success, 0 on failure.
------------
```pawn
public OnPlayerDisconnect(playerid, reason)
{
	orm_destroy(Player[playerid][ORM_ID]);
	return 1;
}
```
------------
##orm_errno
==========
**Description:**
>Returns the error-id of the result application in the current ORM result callback.

**Parameters:**
```bash
(ORM:id)
```
`ORM:id	` 	The id of the ORM instance.

**Return Values:**
Error id.

**Available errors**
| Error	   	| Meaning                                  			|
| ------------- | ------------------------------------------------------------- |
| ERROR_INVALID | An error happened while executing orm_errno (invalid ORM id). |
| ERROR_OK      | No error happened. 						|
| ERROR_NO_DATA | No data has been found in the table.                   	|

------------
```pawn
orm_select(Player[playerid][ORM_ID], "OnStuffSelected", "d", playerid);
 
public OnStuffSelected(playerid)
{
	switch(orm_errno(Player[playerid][ORM_ID])
	{
		case ERROR_INVALID:
			printf("Invalid ORM id.");
			break;
		case ERROR_OK:
			printf("There is no error.");
			break;
		case ERROR_NO_DATA:
			printf("No data in the table found.");
			break;
	}
	return 1;
}
```
------------
##orm_apply_cache
==========
**Description:**
>Applies the data of the active cache to an ORM instance.

**Parameters:**
```bash
(ORM:id, row_idx, result_idx = 0)
```
`ORM:id ` 	The id of the ORM instance.
<br/>
`row_idx ` 	The row index to take the cache data from.
<br/>
`result_idx `	The result index to use (optional).

**Return Values:**
1 on success, 0 on failure.
------------
```pawn
new query[128];
format(query, sizeof(query), "SELECT * FROM `players` WHERE `id` = %d", Player[playerid][ID]);
mysql_tquery(MySQL, query, "OnStuffSelected", "d", playerid);
 
public OnStuffSelected(playerid)
{
	orm_apply_cache(Player[playerid][ORM_ID], 0);
	printf("Player %s has %d Money and is on PosX with %f.", Player[playerid][Name], Player[playerid][Money], Player[playerid][PosX]);
	return 1;
}
```
------------
orm_apply_cache
orm_select
orm_update
orm_insert
orm_delete
orm_load
orm_save
orm_addvar_int
orm_addvar_float
orm_addvar_string
orm_delvar
orm_clear_vars
orm_setkey
2 MySQL functions
2.1 mysql_log
2.1.1 Log levels
2.2 mysql_connect
2.3 mysql_connect_file
2.3.1 Available fields
2.4 mysql_close
2.5 mysql_unprocessed_queries
2.6 mysql_global_options
2.6.1 Options
2.7 mysql_init_options
2.8 mysql_set_option
2.8.1 Available options
2.9 mysql_pquery
2.9.1 Format specifiers
2.10 mysql_tquery
2.10.1 Format specifiers
2.11 mysql_tquery_file
2.12 mysql_query
2.13 mysql_query_file
2.14 mysql_errno
2.15 mysql_error
2.16 mysql_escape_string
2.17 mysql_format
2.17.1 Format strings
2.18 mysql_set_charset
2.19 mysql_get_charset
2.20 mysql_stat
3 Cache functions
3.1 cache_get_row_count
3.2 cache_get_field_count
3.3 cache_get_result_count
3.4 cache_get_field_name
3.5 cache_get_field_type
3.6 cache_set_result
3.7 cache_get_value_index
3.8 cache_get_value_index_int
3.9 cache_get_value_index_float
3.10 cache_is_value_index_null
3.11 cache_get_value_name
3.12 cache_get_value_name_int
3.13 cache_get_value_name_float
3.14 cache_is_value_name_null
3.15 cache_save
3.16 cache_delete
3.17 cache_set_active
3.18 cache_unset_active
3.19 cache_is_any_active
3.20 cache_is_valid
3.21 cache_affected_rows
3.22 cache_warning_count
3.23 cache_insert_id
3.24 cache_get_query_exec_time
3.24.1 Time units
3.25 cache_get_query_string
4 Plugin callbacks
4.1 OnQueryError
