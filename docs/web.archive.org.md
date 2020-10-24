
	<div id="globalWrapper">
		<div id="column-content">
	<div id="content">
		[]()
				# MySQL/R40
		<div id="bodyContent">
			### From SA-MP Wiki
			<div id="contentSub"></div>
									<div id="jump-to-nav">Jump to: [navigation](#column-one), [search](#searchInput)</div>			
			<table class="wikitable" style="float: right;">
<tbody><tr>
<th colspan="2">MySQL Plugin  
<span style="color: rgb(154, 17, 52);"><i>Plugin</i></span>
</th></tr>
<tr>
<td style="text-align: center;">Author</td><td style="text-align: center;"><span class="plainlinks">[BlueG / maddinat0r](https://web.archive.org/web/20190415235016/http://forum.sa-mp.com/member.php?u=13918 "http://forum.sa-mp.com/member.php?u=13918")</span>
</td></tr>
<tr>
<td style="text-align: center;">Released</td><td style="text-align: center;">29/11/2008
</td></tr>
<tr>
<td style="text-align: center;">Latest Version</td><td style="text-align: center;">R41-4 <small>(10/09/2017)</small>
</td></tr>
<tr>
<td style="text-align: center;">Development Status </td><td style="text-align: center;"> Active
</td></tr>
<tr>
<td style="text-align: center;">License </td><td style="text-align: center;"> [License](https://web.archive.org/web/20190415235016/https://github.com/pBlueG/SA-MP-MySQL/blob/master/LICENSE "https://github.com/pBlueG/SA-MP-MySQL/blob/master/LICENSE")
</td></tr>
<tr>
<td colspan="2" style="text-align: center;">[Forum Topic](https://web.archive.org/web/20190415235016/http://forum.sa-mp.com/showthread.php?t=56564 "http://forum.sa-mp.com/showthread.php?t=56564")
</td></tr></tbody></table>
Documentation for BlueG's MySQL plugin version R40 and later. Forum topic and download links can be found [here](https://web.archive.org/web/20190415235016/http://forum.sa-mp.com/showthread.php?t=56564 "http://forum.sa-mp.com/showthread.php?t=56564").

<table id="toc" class="toc" summary="Contents"><tbody><tr><td><div id="toctitle">
## Contents 
<span class="toctoggle">[[hide](javascript:toggleToc())]</span></div>


- [<span class="tocnumber">1</span> <span class="toctext">ORM functions</span>](#ORM_functions)
        
    - [<span class="tocnumber">1.1</span> <span class="toctext">orm_create</span>](#orm_create)
        
    - [<span class="tocnumber">1.2</span> <span class="toctext">orm_destroy</span>](#orm_destroy)
        
    - [<span class="tocnumber">1.3</span> <span class="toctext">orm_errno</span>](#orm_errno)
        
    - [<span class="tocnumber">1.4</span> <span class="toctext">orm_apply_cache</span>](#orm_apply_cache)
        
    - [<span class="tocnumber">1.5</span> <span class="toctext">orm_select</span>](#orm_select)
        
    - [<span class="tocnumber">1.6</span> <span class="toctext">orm_update</span>](#orm_update)
        
    - [<span class="tocnumber">1.7</span> <span class="toctext">orm_insert</span>](#orm_insert)
        
    - [<span class="tocnumber">1.8</span> <span class="toctext">orm_delete</span>](#orm_delete)
        
    - [<span class="tocnumber">1.9</span> <span class="toctext">orm_load</span>](#orm_load)
        
    - [<span class="tocnumber">1.10</span> <span class="toctext">orm_save</span>](#orm_save)
        
    - [<span class="tocnumber">1.11</span> <span class="toctext">orm_addvar_int</span>](#orm_addvar_int)
        
    - [<span class="tocnumber">1.12</span> <span class="toctext">orm_addvar_float</span>](#orm_addvar_float)
        
    - [<span class="tocnumber">1.13</span> <span class="toctext">orm_addvar_string</span>](#orm_addvar_string)
        
    - [<span class="tocnumber">1.14</span> <span class="toctext">orm_delvar</span>](#orm_delvar)
        
    - [<span class="tocnumber">1.15</span> <span class="toctext">orm_clear_vars</span>](#orm_clear_vars)
        
    - [<span class="tocnumber">1.16</span> <span class="toctext">orm_setkey</span>](#orm_setkey)
        
    

- [<span class="tocnumber">2</span> <span class="toctext">MySQL functions</span>](#MySQL_functions)
        
    - [<span class="tocnumber">2.1</span> <span class="toctext">mysql_log</span>](#mysql_log)
            
        - [<span class="tocnumber">2.1.1</span> <span class="toctext">Log levels</span>](#Log_levels)
            
        
        
    - [<span class="tocnumber">2.2</span> <span class="toctext">mysql_connect</span>](#mysql_connect)
        
    - [<span class="tocnumber">2.3</span> <span class="toctext">mysql_connect_file</span>](#mysql_connect_file)
            
        - [<span class="tocnumber">2.3.1</span> <span class="toctext">Available fields</span>](#Available_fields)
            
        
        
    - [<span class="tocnumber">2.4</span> <span class="toctext">mysql_close</span>](#mysql_close)
        
    - [<span class="tocnumber">2.5</span> <span class="toctext">mysql_unprocessed_queries</span>](#mysql_unprocessed_queries)
        
    - [<span class="tocnumber">2.6</span> <span class="toctext">mysql_global_options</span>](#mysql_global_options)
            
        - [<span class="tocnumber">2.6.1</span> <span class="toctext">Options</span>](#Options)
            
        
        
    - [<span class="tocnumber">2.7</span> <span class="toctext">mysql_init_options</span>](#mysql_init_options)
        
    - [<span class="tocnumber">2.8</span> <span class="toctext">mysql_set_option</span>](#mysql_set_option)
            
        - [<span class="tocnumber">2.8.1</span> <span class="toctext">Available options</span>](#Available_options)
            
        
        
    - [<span class="tocnumber">2.9</span> <span class="toctext">mysql_pquery</span>](#mysql_pquery)
            
        - [<span class="tocnumber">2.9.1</span> <span class="toctext">Format specifiers</span>](#Format_specifiers)
            
        
        
    - [<span class="tocnumber">2.10</span> <span class="toctext">mysql_tquery</span>](#mysql_tquery)
            
        - [<span class="tocnumber">2.10.1</span> <span class="toctext">Format specifiers</span>](#Format_specifiers_2)
            
        
        
    - [<span class="tocnumber">2.11</span> <span class="toctext">mysql_tquery_file</span>](#mysql_tquery_file)
        
    - [<span class="tocnumber">2.12</span> <span class="toctext">mysql_query</span>](#mysql_query)
        
    - [<span class="tocnumber">2.13</span> <span class="toctext">mysql_query_file</span>](#mysql_query_file)
        
    - [<span class="tocnumber">2.14</span> <span class="toctext">mysql_errno</span>](#mysql_errno)
        
    - [<span class="tocnumber">2.15</span> <span class="toctext">mysql_error</span>](#mysql_error)
        
    - [<span class="tocnumber">2.16</span> <span class="toctext">mysql_escape_string</span>](#mysql_escape_string)
        
    - [<span class="tocnumber">2.17</span> <span class="toctext">mysql_format</span>](#mysql_format)
            
        - [<span class="tocnumber">2.17.1</span> <span class="toctext">Format strings</span>](#Format_strings)
            
        
        
    - [<span class="tocnumber">2.18</span> <span class="toctext">mysql_set_charset</span>](#mysql_set_charset)
        
    - [<span class="tocnumber">2.19</span> <span class="toctext">mysql_get_charset</span>](#mysql_get_charset)
        
    - [<span class="tocnumber">2.20</span> <span class="toctext">mysql_stat</span>](#mysql_stat)
        
    

- [<span class="tocnumber">3</span> <span class="toctext">Cache functions</span>](#Cache_functions)
        
    - [<span class="tocnumber">3.1</span> <span class="toctext">cache_get_row_count</span>](#cache_get_row_count)
        
    - [<span class="tocnumber">3.2</span> <span class="toctext">cache_get_field_count</span>](#cache_get_field_count)
        
    - [<span class="tocnumber">3.3</span> <span class="toctext">cache_get_result_count</span>](#cache_get_result_count)
        
    - [<span class="tocnumber">3.4</span> <span class="toctext">cache_get_field_name</span>](#cache_get_field_name)
        
    - [<span class="tocnumber">3.5</span> <span class="toctext">cache_get_field_type</span>](#cache_get_field_type)
        
    - [<span class="tocnumber">3.6</span> <span class="toctext">cache_set_result</span>](#cache_set_result)
        
    - [<span class="tocnumber">3.7</span> <span class="toctext">cache_get_value_index</span>](#cache_get_value_index)
        
    - [<span class="tocnumber">3.8</span> <span class="toctext">cache_get_value_index_int</span>](#cache_get_value_index_int)
        
    - [<span class="tocnumber">3.9</span> <span class="toctext">cache_get_value_index_float</span>](#cache_get_value_index_float)
        
    - [<span class="tocnumber">3.10</span> <span class="toctext">cache_is_value_index_null</span>](#cache_is_value_index_null)
        
    - [<span class="tocnumber">3.11</span> <span class="toctext">cache_get_value_name</span>](#cache_get_value_name)
        
    - [<span class="tocnumber">3.12</span> <span class="toctext">cache_get_value_name_int</span>](#cache_get_value_name_int)
        
    - [<span class="tocnumber">3.13</span> <span class="toctext">cache_get_value_name_float</span>](#cache_get_value_name_float)
        
    - [<span class="tocnumber">3.14</span> <span class="toctext">cache_is_value_name_null</span>](#cache_is_value_name_null)
        
    - [<span class="tocnumber">3.15</span> <span class="toctext">cache_save</span>](#cache_save)
        
    - [<span class="tocnumber">3.16</span> <span class="toctext">cache_delete</span>](#cache_delete)
        
    - [<span class="tocnumber">3.17</span> <span class="toctext">cache_set_active</span>](#cache_set_active)
        
    - [<span class="tocnumber">3.18</span> <span class="toctext">cache_unset_active</span>](#cache_unset_active)
        
    - [<span class="tocnumber">3.19</span> <span class="toctext">cache_is_any_active</span>](#cache_is_any_active)
        
    - [<span class="tocnumber">3.20</span> <span class="toctext">cache_is_valid</span>](#cache_is_valid)
        
    - [<span class="tocnumber">3.21</span> <span class="toctext">cache_affected_rows</span>](#cache_affected_rows)
        
    - [<span class="tocnumber">3.22</span> <span class="toctext">cache_warning_count</span>](#cache_warning_count)
        
    - [<span class="tocnumber">3.23</span> <span class="toctext">cache_insert_id</span>](#cache_insert_id)
        
    - [<span class="tocnumber">3.24</span> <span class="toctext">cache_get_query_exec_time</span>](#cache_get_query_exec_time)
            
        - [<span class="tocnumber">3.24.1</span> <span class="toctext">Time units</span>](#Time_units)
            
        
        
    - [<span class="tocnumber">3.25</span> <span class="toctext">cache_get_query_string</span>](#cache_get_query_string)
        
    

- [<span class="tocnumber">4</span> <span class="toctext">Plugin callbacks</span>](#Plugin_callbacks)
        
    - [<span class="tocnumber">4.1</span> <span class="toctext">OnQueryError</span>](#OnQueryError)
        
    


</td></tr></tbody></table>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=1" title="Edit section: ORM functions">edit</a>]</div>
[]()
#  ORM functions 
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=2" title="Edit section: orm_create">edit</a>]</div>
[]()
##  orm_create 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Creates an ORM instance and returns its id.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(const table[], MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const table[]</td><td style="vertical-align: top;">The name of the table you wish to control.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">ORM id on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerConnect"><span style="color: rgb(220, 20, 60);">OnPlayerConnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:orm = Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span> = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=3" title="Edit section: orm_destroy">edit</a>]</div>
[]()
##  orm_destroy 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Destroys an ORM instance.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerDisconnect"><span style="color: rgb(220, 20, 60);">OnPlayerDisconnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, reason<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	orm_destroy<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=4" title="Edit section: orm_errno">edit</a>]</div>
[]()
##  orm_errno 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the error-id of the result application in the current ORM result callback.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Error id.<br></div>
<br>


<table class="wikitable">
<caption style="text-align: left;"><b>Available errors</b>
</caption><tbody><tr>
<th> Error </th><th>  Meaning
</th></tr>
<tr>
<td> ERROR_INVALID </td><td> An error happened while executing orm_errno (invalid ORM id).
</td></tr>
<tr>
<td> ERROR_OK </td><td> No error happened.
</td></tr>
<tr>
<td> ERROR_NO_DATA  </td><td> No data has been found in the table.
</td></tr></tbody></table>
<pre class="pawn">orm_select<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"OnStuffSelected"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnStuffSelected<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(65, 105, 225);">switch</span><span style="color: rgb(102, 204, 102);">(</span>orm_errno<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>
	<span style="color: rgb(102, 204, 102);">{</span>
		<span style="color: orange; font-weight: bold;">case</span> ERROR_INVALID:
			<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Invalid ORM id."</span><span style="color: rgb(102, 204, 102);">)</span>;
			<span style="color: orange; font-weight: bold;">break</span>;
		<span style="color: orange; font-weight: bold;">case</span> ERROR_OK:
			<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There is no error."</span><span style="color: rgb(102, 204, 102);">)</span>;
			<span style="color: orange; font-weight: bold;">break</span>;
		<span style="color: orange; font-weight: bold;">case</span> ERROR_NO_DATA:
			<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"No data in the table found."</span><span style="color: rgb(102, 204, 102);">)</span>;
			<span style="color: orange; font-weight: bold;">break</span>;
	<span style="color: rgb(102, 204, 102);">}</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=5" title="Edit section: orm_apply_cache">edit</a>]</div>
[]()
##  orm_apply_cache 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Applies the data of the active cache to an ORM instance.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, row_idx, result_idx = 0)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index to take the cache data from.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">result_idx</td><td style="vertical-align: top;">The result index to use (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/format"><span style="color: rgb(0, 100, 0);">format</span></a><span style="color: rgb(102, 204, 102);">(</span>query, <span style="color: orange; font-weight: bold;">sizeof</span><span style="color: rgb(102, 204, 102);">(</span>query<span style="color: rgb(102, 204, 102);">)</span>, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `players` WHERE `id` = %d"</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: rgb(178, 34, 34);">"OnStuffSelected"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnStuffSelected<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	orm_apply_cache<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(65, 105, 225);">0</span><span style="color: rgb(102, 204, 102);">)</span>;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Player %s has %d Money and is on PosX with %f."</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=6" title="Edit section: orm_select">edit</a>]</div>
[]()
##  orm_select 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sends a SELECT query and applies the retrieved data to the previously registered variables.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The name of the callback to call when the operation is done (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier for the callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float, _}:...</td><td style="vertical-align: top;">Indefinite number of parameters to pass to the callback (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn">orm_select<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"OnPlayerDataLoaded"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Player %s has %d Money and is on PosX with %f."</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=7" title="Edit section: orm_update">edit</a>]</div>
[]()
##  orm_update 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sends an UPDATE query with the current values of the registered variables.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The name of the callback to call when the operation is done (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier for the callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float, _}:...</td><td style="vertical-align: top;">Indefinite number of parameters to pass to the callback (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn">orm_update<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">//this generates a query like "UPDATE `players` SET ´name´='PlayerName', `money`='23141', `pos_x`='231.432' WHERE `id`='42'" and executes it</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=8" title="Edit section: orm_insert">edit</a>]</div>
[]()
##  orm_insert 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sends an INSERT query with the current values of the registered variables.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The name of the callback to call when the operation is done (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier for the callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float, _}:...</td><td style="vertical-align: top;">Indefinite number of parameters to pass to the callback (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn">orm_insert<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"OnPlayerRegistered"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerRegistered<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Player %s has registered with id %d."</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=9" title="Edit section: orm_delete">edit</a>]</div>
[]()
##  orm_delete 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sends a DELETE query.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The name of the callback to call when the operation is done (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier for the callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float, _}:...</td><td style="vertical-align: top;">Indefinite number of parameters to pass to the callback (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn">orm_delete<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">//this generates a query like "DELETE FROM `players` WHERE `id`='42'" and executes it</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=10" title="Edit section: orm_load">edit</a>]</div>
[]()
##  orm_load 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Fetches data from a table and applies it to the previously registered variables. This function is the same as <a href="#orm_select" title="MySQL/R40">orm_select()</a>.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The name of the callback to call when the operation is done (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier for the callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float, _}:...</td><td style="vertical-align: top;">Indefinite number of parameters to pass to the callback (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn">orm_load<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"OnPlayerDataLoaded"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Player %s has %d Money and is on PosX with %f."</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=11" title="Edit section: orm_save">edit</a>]</div>
[]()
##  orm_save 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Saves data to a table. This function is a combination of <a href="#orm_insert" title="MySQL/R40">orm_insert()</a> and <a href="#orm_update" title="MySQL/R40">orm_update()</a>. If the previously specified key variable has a valid value (not 0 for integers and not empty for strings), orm_save calls <a href="#orm_update" title="MySQL/R40">orm_update</a>, else <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/MySQL/R33#orm_insert" title="MySQL/R33">orm_insert</a>.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The name of the callback to call when the operation is done (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier for the callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float, _}:...</td><td style="vertical-align: top;">Indefinite number of parameters to pass to the callback (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn">Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span> = <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/GetPlayerMoney"><span style="color: rgb(0, 100, 0);">GetPlayerMoney</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>;
orm_save<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ORM_ID<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=12" title="Edit section: orm_addvar_int">edit</a>]</div>
[]()
##  orm_addvar_int 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Registers an integer variable to an ORM instance and links it to the specified column.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, &amp;var, const columnname[])  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;var</td><td style="vertical-align: top;">The variable to register.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const columnname[]</td><td style="vertical-align: top;">The name of the column in the MySQL table.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if successfully added, 0 if not.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:ormid = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_addvar_int<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"id"</span><span style="color: rgb(102, 204, 102);">)</span>;
orm_addvar_int<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"money"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=13" title="Edit section: orm_addvar_float">edit</a>]</div>
[]()
##  orm_addvar_float 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Registers a floating point variable to an ORM instance and links it to the specified column.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, &amp;var, const columnname[])  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;Float:var</td><td style="vertical-align: top;">The variable to register.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const columnname[]</td><td style="vertical-align: top;">The name of the column in the MySQL table.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if successfully added, 0 if not.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:ormid = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_addvar_float<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"pos_x"</span><span style="color: rgb(102, 204, 102);">)</span>;
orm_addvar_float<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosY<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"pos_y"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=14" title="Edit section: orm_addvar_string">edit</a>]</div>
[]()
##  orm_addvar_string 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Registers a string variable to an ORM instance and links it to the specified column.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, var[], var_maxlen, const columnname[])  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">var[]</td><td style="vertical-align: top;">The variable to register.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">var_maxlen</td><td style="vertical-align: top;">The size of the registered variable.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const columnname[]</td><td style="vertical-align: top;">The name of the column in the MySQL table.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if successfully added, 0 if not.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER <span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
	Name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>,
	Password<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">129</span><span style="color: rgb(102, 204, 102);">]</span>
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> Player<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:ormid = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_addvar_string<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span>, <span style="color: rgb(178, 34, 34);">"name"</span><span style="color: rgb(102, 204, 102);">)</span>;
orm_addvar_string<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Password<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(65, 105, 225);">129</span>, <span style="color: rgb(178, 34, 34);">"passwd"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=15" title="Edit section: orm_delvar">edit</a>]</div>
[]()
##  orm_delvar 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Removes a previously registered variable from the specified ORM instance by its column name.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const columnname[])  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const columnname[]</td><td style="vertical-align: top;">The name of the column.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if successfully deleted, 0 if not.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:ormid = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_addvar_int<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"id"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
orm_delvar<span style="color: rgb(102, 204, 102);">(</span>ormid, <span style="color: rgb(178, 34, 34);">"id"</span><span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//returns true, variable "Player[playerid][ID]" has been removed</span>
orm_delvar<span style="color: rgb(102, 204, 102);">(</span>ormid, <span style="color: rgb(178, 34, 34);">"id"</span><span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//returns false, because the variable couldn't be found as it was already removed</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=16" title="Edit section: orm_clear_vars">edit</a>]</div>
[]()
##  orm_clear_vars 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sets all variables registered in the specified ORM instance to zero.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:ormid = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span> = <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/GetPlayerMoney"><span style="color: rgb(0, 100, 0);">GetPlayerMoney</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/GetPlayerHealth"><span style="color: rgb(0, 100, 0);">GetPlayerHealth</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Health<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_addvar_int<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"money"</span><span style="color: rgb(102, 204, 102);">)</span>;
orm_addvar_float<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Health<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"Health"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_clear_vars<span style="color: rgb(102, 204, 102);">(</span>ormid<span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//the money and health variables are now set to '0'</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=17" title="Edit section: orm_setkey">edit</a>]</div>
[]()
##  orm_setkey 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sets a previously registered variable as key specified by the column name the variable has been linked to.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(ORM:id, const columnname[])  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">ORM:id</td><td style="vertical-align: top;">The id of the ORM instance.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const columnname[]</td><td style="vertical-align: top;">The name of the column in the MySQL table.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if successfully set, 0 otherwise.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">ORM</span>:ormid = orm_create<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"players"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
orm_addvar_int<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>ID<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"id"</span><span style="color: rgb(102, 204, 102);">)</span>;
orm_addvar_float<span style="color: rgb(102, 204, 102);">(</span>ormid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(178, 34, 34);">"pos_x"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
orm_setkey<span style="color: rgb(102, 204, 102);">(</span>ormid, <span style="color: rgb(178, 34, 34);">"id"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=18" title="Edit section: MySQL functions">edit</a>]</div>
[]()
#  MySQL functions 
<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Almost every function has a connection handle parameter. If you only use one connection you don't need to mind it.</span>
</td></tr></tbody></table>
</div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=19" title="Edit section: mysql_log">edit</a>]</div>
[]()
##  mysql_log 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Controls what information will be logged.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Logging is always enabled by default, even if you don't call mysql_log.</span>
</td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(E_LOGLEVEL:loglevel = ERROR | WARNING)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">E_LOGLEVEL:loglevel</td><td style="vertical-align: top;">Specifies what type of log messages will be logged (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">This function does not return any specific values.<br></div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=20" title="Edit section: Log levels">edit</a>]</div>
[]()
####  Log levels 
<table class="wikitable">
<tbody><tr>
<th> Log type  </th><th>  Description
</th></tr>
<tr>
<td> NONE </td><td> Logs absolutely nothing.
</td></tr>
<tr>
<td> ERROR </td><td> Logs errors.
</td></tr>
<tr>
<td> WARNING </td><td> Logs warnings.
</td></tr>
<tr>
<td> INFO </td><td> Logs informational messages.
</td></tr>
<tr>
<td> DEBUG </td><td> Logs debug messages.
</td></tr>
<tr>
<td> ALL </td><td> Logs everything.
</td></tr></tbody></table>

<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnGameModeInit"><span style="color: rgb(220, 20, 60);">OnGameModeInit</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	mysql_log<span style="color: rgb(102, 204, 102);">(</span>ALL<span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//logs everything (errors, warnings and debug messages)</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=21" title="Edit section: mysql_connect">edit</a>]</div>
[]()
##  mysql_connect 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Connects to a MySQL server and database.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(const host[], const user[], const password[], const database[], MySQLOpt:option_id = MySQLOpt:0)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const host[]</td><td style="vertical-align: top;">IP or hostname of the MySQL server.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const user[]</td><td style="vertical-align: top;">Username of the account you want to connect to.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const password[]</td><td style="vertical-align: top;">Password of the account you want to connect to.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const database[]</td><td style="vertical-align: top;">Name of the database you want to connect to.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQLOpt:option_id</td><td style="vertical-align: top;">MySQL connection options instance, see <a href="#mysql_init_options" title="MySQL/R40">mysql_init_options()</a> and <a href="#mysql_set_option" title="MySQL/R40">mysql_set_option()</a> (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Connection handle or <i>MYSQL_INVALID_HANDLE</i> on error.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">If no option id is specified, the default options will be used.</span>
</td></tr></tbody></table>
</div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQL</span>:g_Sql;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnGameModeInit"><span style="color: rgb(220, 20, 60);">OnGameModeInit</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	g_Sql = mysql_connect<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"127.0.0.1"</span>, <span style="color: rgb(178, 34, 34);">"root"</span>, <span style="color: rgb(178, 34, 34);">"mypass"</span>, <span style="color: rgb(178, 34, 34);">"mydatabase"</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=22" title="Edit section: mysql_connect_file">edit</a>]</div>
[]()
##  mysql_connect_file 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Connects to a MySQL server and database using a INI-like file where all connection credentials and options are specified.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(const file_name[] = "mysql.ini")  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const file_name[]</td><td style="vertical-align: top;">Name for the connection file (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Connection handle or <i>MYSQL_INVALID_HANDLE</i> on error.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">You can't specify any directories in the file name, the connection file has to be in the SA-MP server root folder.</span>
</td></tr></tbody></table>
</div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=23" title="Edit section: Available fields">edit</a>]</div>
[]()
####  Available fields 
<table class="wikitable">
<tbody><tr>
<th> Field  </th><th>  Type  </th><th>  Description
</th></tr>
<tr>
<td> hostname </td><td> string </td><td> The IP/hostname.
</td></tr>
<tr>
<td> username </td><td> string </td><td> The name of the user.
</td></tr>
<tr>
<td> password </td><td> string </td><td> The password of the user.
</td></tr>
<tr>
<td> database </td><td> string </td><td> The database to use.
</td></tr>
<tr>
<td> auto_reconnect </td><td> boolean (optional, true by default) </td><td> Whether automatically reconnect to the server on connection loss or not.
</td></tr>
<tr>
<td> multi_statements </td><td> boolean (optional, false by default) </td><td> Allow/Disallow executing multiple SQL statements in one query.
</td></tr>
<tr>
<td> pool_size </td><td> unsigned integer (optional, 2 by default) </td><td> Size of connection pool for [mysql_pquery()](#mysql_pquery "MySQL/R40").
</td></tr>
<tr>
<td> server_port </td><td> unsigned integer (optional, 3306 by default) </td><td> Server port.
</td></tr>
<tr>
<td> ssl_enable </td><td> boolean (optional, false by default) </td><td> Enable/disable SSL.
</td></tr>
<tr>
<td> ssl_key_file </td><td> string (optional) </td><td> Path to key file.
</td></tr>
<tr>
<td> ssl_cert_file </td><td> string (optional) </td><td> Path to certificate file.
</td></tr>
<tr>
<td> ssl_ca_file </td><td> string (optional) </td><td> Path to certificate authority file.
</td></tr>
<tr>
<td> ssl_ca_path </td><td> string (optional) </td><td> Path name to a directory that contains trusted SSL CA certificates in PEM format.
</td></tr>
<tr>
<td> ssl_cipher </td><td> string (optional) </td><td> List of permissible ciphers to use for SSL encryption.
</td></tr></tbody></table>

Valid connection file example:

<pre class="pawn">hostname	= <span style="color: rgb(65, 105, 225);">127.0</span><span style="color: rgb(65, 105, 225);">.0</span><span style="color: rgb(65, 105, 225);">.1</span>	&nbsp;; this is a comment
username    = tester  		<span style="color: rgb(107, 142, 35);"># this is also a comment</span>
password	= <span style="color: rgb(65, 105, 225);">1234</span>	
database	= test	
<span style="color: rgb(107, 142, 35);"># auto_reconnect = false</span>
multi_statements = true
<span style="color: rgb(107, 142, 35);"># pool_size = 3</span>
; server_port = <span style="color: rgb(65, 105, 225);">3306</span></pre>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQL</span>:g_Sql;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnGameModeInit"><span style="color: rgb(220, 20, 60);">OnGameModeInit</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	g_Sql = mysql_connect_file<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=24" title="Edit section: mysql_close">edit</a>]</div>
[]()
##  mysql_close 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Closes the MySQL connection.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">mysql_close will always wait until all queued queries are executed, thus halting the server.</span>
</td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle to close (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on fail.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnGameModeExit"><span style="color: rgb(220, 20, 60);">OnGameModeExit</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>g_Sql, <span style="color: rgb(178, 34, 34);">"UPDATE `players` SET `is_online` = '0'"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	mysql_close<span style="color: rgb(102, 204, 102);">(</span>g_Sql<span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//mysql_close will now halt the server until the query we just sent is executed.</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=25" title="Edit section: mysql_unprocessed_queries">edit</a>]</div>
[]()
##  mysql_unprocessed_queries 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the number of unprocessed (threaded) queries.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Number of unprocessed queries or -1 on error.<br></div>
<br>

<pre class="pawn"><a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There are %d unprocessed queries."</span>, mysql_unprocessed_queries<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=26" title="Edit section: mysql_global_options">edit</a>]</div>
[]()
##  mysql_global_options 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sets global options regarding the MySQL plugin.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(E_MYSQL_OPTION:type, value)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">E_MYSQL_OPTION:type</td><td style="vertical-align: top;">Option to change.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">value</td><td style="vertical-align: top;">Value the option should be set to.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure<br></div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=27" title="Edit section: Options">edit</a>]</div>
[]()
####  Options 
<table class="wikitable">
<tbody><tr>
<th> Option  </th><th>  Type  </th><th>  Description
</th></tr>
<tr>
<td> DUPLICATE_CONNECTIONS </td><td> boolean (false by default) </td><td> Allows to create multiple connections to the same database and server.
</td></tr>
<tr>
<td> DUPLICATE_CONNECTION_WARNING </td><td> boolean (true by default) </td><td> Controls whether to print a warning when a duplicate connection is detected. Used only if <i>DUPLICATE_CONNECTIONS</i> is false.
</td></tr></tbody></table>
<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnGameModeInit"><span style="color: rgb(220, 20, 60);">OnGameModeInit</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	mysql_global_options<span style="color: rgb(102, 204, 102);">(</span>DUPLICATE_CONNECTIONS, true<span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//allows the use of dupl. connections</span>
&nbsp;
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQL</span>:g_Sql1 = mysql_connect<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"127.0.0.1"</span>, <span style="color: rgb(178, 34, 34);">"root"</span>, <span style="color: rgb(178, 34, 34);">"mypass"</span>, <span style="color: rgb(178, 34, 34);">"mydatabase"</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQL</span>:g_Sql2 = mysql_connect<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"127.0.0.1"</span>, <span style="color: rgb(178, 34, 34);">"root"</span>, <span style="color: rgb(178, 34, 34);">"mypass"</span>, <span style="color: rgb(178, 34, 34);">"mydatabase"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"connection 1 and connection 2 are %s."</span>, g_Sql1 == g_Sql2&nbsp;? <span style="color: rgb(178, 34, 34);">"the same"</span>&nbsp;: <span style="color: rgb(178, 34, 34);">"not the same"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	<span style="color: rgb(128, 128, 128); font-style: italic;">//output: "connection 1 and connection 2 are the same."</span>
&nbsp;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=28" title="Edit section: mysql_init_options">edit</a>]</div>
[]()
##  mysql_init_options 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Creates a MySQL connection options instance with default values.<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">MySQL connection options id.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQLOpt</span>:options = mysql_init_options<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=29" title="Edit section: mysql_set_option">edit</a>]</div>
[]()
##  mysql_set_option 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sets an option to the specified value.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQLOpt:option_id, E_MYSQL_OPTION:type, ...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQLOpt:option_id</td><td style="vertical-align: top;">The MySQL connection options id.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">E_MYSQL_OPTION:type</td><td style="vertical-align: top;">The option to change.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">...</td><td style="vertical-align: top;">The new (single) value to set the option to.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if option was successfully set, 0 otherwise.<br></div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=30" title="Edit section: Available options">edit</a>]</div>
[]()
####  Available options 
<table class="wikitable">
<tbody><tr>
<th> Option  </th><th>  Type  </th><th>  Description
</th></tr>
<tr>
<td> AUTO_RECONNECT </td><td> boolean (optional, true by default) </td><td> Whether automatically reconnect to the server on connection loss or not.
</td></tr>
<tr>
<td> MULTI_STATEMENTS </td><td> boolean (optional, false by default) </td><td> Allow/Disallow executing multiple SQL statements in one query.
</td></tr>
<tr>
<td> POOL_SIZE </td><td> unsigned integer (optional, 2 by default) </td><td> Size of connection pool for [mysql_pquery()](#mysql_pquery "MySQL/R40").
</td></tr>
<tr>
<td> SERVER_PORT </td><td> unsigned integer (optional, 3306 by default) </td><td> Server port.
</td></tr>
<tr>
<td> SSL_ENABLE </td><td> boolean (optional, false by default) </td><td> Enable/disable SSL.
</td></tr>
<tr>
<td> SSL_KEY_FILE </td><td> string (optional) </td><td> Path to key file.
</td></tr>
<tr>
<td> SSL_CERT_FILE </td><td> string (optional) </td><td> Path to certificate file.
</td></tr>
<tr>
<td> SSL_CA_FILE </td><td> string (optional) </td><td> Path to certificate authority file.
</td></tr>
<tr>
<td> SSL_CA_PATH </td><td> string (optional) </td><td> Path name to a directory that contains trusted SSL CA certificates in PEM format.
</td></tr>
<tr>
<td> SSL_CIPHER </td><td> string (optional) </td><td> List of permissible ciphers to use for SSL encryption.
</td></tr></tbody></table>
<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQLOpt</span>:options = mysql_init_options<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
mysql_set_option<span style="color: rgb(102, 204, 102);">(</span>options, AUTO_RECONNECT, false<span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//disable auto-reconnect</span>
mysql_set_option<span style="color: rgb(102, 204, 102);">(</span>options, POOL_SIZE, <span style="color: rgb(65, 105, 225);">0</span><span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//disable connection pool (and thus mysql_pquery)</span>
&nbsp;
g_Sql = mysql_connect<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"127.0.0.1"</span>, <span style="color: rgb(178, 34, 34);">"root"</span>, <span style="color: rgb(178, 34, 34);">"mypass"</span>, <span style="color: rgb(178, 34, 34);">"mydatabase"</span>, options<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=31" title="Edit section: mysql_pquery">edit</a>]</div>
[]()
##  mysql_pquery 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sends a query which will be executed in another thread concurrently and calls the callback (if there is one) when the execution is finished.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a><br>
<p><strong>Notes</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">
<ul><li>If you are not sure which query native to use, use <a href="#mysql_tquery" title="MySQL/R40">mysql_tquery()</a>.
</li><li>The difference between this native and <a href="#mysql_tquery" title="MySQL/R40">mysql_tquery()</a> is, that multiple queries sent with this native at once can be processed in parallel, thus it __may__ be faster __in some cases__, depending on the connection pool size. There may be also cases where executing queries in parallel will result in worse performance than with <a href="#mysql_tquery" title="MySQL/R40">mysql_tquery()</a>.
</li><li>The size of the connection pool can be specified through <a href="#mysql_set_option" title="MySQL/R40">mysql_set_option()</a> with the <i>POOL_SIZE</i> parameter. Each connection in the pool resembles a thread.
</li></ul>
<p>
</p>
</span></td></tr></tbody></table>
</div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Notes</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">
<ul><li>Queries sent with this native may be executed out of order.
</li><li>Queries sent with this native don't support transactions.
</li></ul>
<p>
</p>
</span></td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle, const query[], const callback[] = "", const format[] = "", {Float,_}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const query[]</td><td style="vertical-align: top;">The query to be executed.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The result callback to call after the query successfully executed (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier string for the result callback (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float,_}:...</td><td style="vertical-align: top;">Indefinite number of arguments (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if the query was successfully queued for execution, 0 otherwise.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">The callback must be a <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Public_functions" title="Public functions">public function</a>. That means it has to be <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Public_functions#Forwarding" title="Public functions">forwarded</a>.</span>
</td></tr></tbody></table>
</div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=32" title="Edit section: Format specifiers">edit</a>]</div>
[]()
####  Format specifiers 
<table class="wikitable">
<tbody><tr>
<th> Specifier </th><th>  Meaning
</th></tr>
<tr>
<td> d/i </td><td> integer number
</td></tr>
<tr>
<td> s</td><td> string
</td></tr>
<tr>
<td> f </td><td> floating point number
</td></tr>
<tr>
<td> b </td><td> boolean
</td></tr>
<tr>
<td> a </td><td> array (has to be followed by 'd'/'i' with the array length; the array length is also passed as a callback argument)
</td></tr>
<tr>
<td> r </td><td> reference
</td></tr></tbody></table>
<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">forward</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerConnect"><span style="color: rgb(220, 20, 60);">OnPlayerConnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>, pname<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>;
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> array<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">10</span><span style="color: rgb(102, 204, 102);">]</span> = <span style="color: rgb(102, 204, 102);">{</span><span style="color: rgb(65, 105, 225);">1</span>, <span style="color: rgb(65, 105, 225);">2</span>, ...<span style="color: rgb(102, 204, 102);">}</span>;
&nbsp;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/GetPlayerName"><span style="color: rgb(0, 100, 0);">GetPlayerName</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, pname, <span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	mysql_format<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: orange; font-weight: bold;">sizeof</span><span style="color: rgb(102, 204, 102);">(</span>query<span style="color: rgb(102, 204, 102);">)</span>, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `players` WHERE `name` LIKE '%e'"</span>, pname<span style="color: rgb(102, 204, 102);">)</span>;
	mysql_pquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: rgb(178, 34, 34);">"OnPlayerDataLoaded"</span>, <span style="color: rgb(178, 34, 34);">"dad"</span>, playerid, array, <span style="color: orange; font-weight: bold;">sizeof</span> array<span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid, array<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(102, 204, 102);">]</span>, array_size<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">//Query processed, you can now execute cache functions (like cache_get_value_index) here.</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There are %d players with the same name."</span>, cache_num_rows<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=33" title="Edit section: mysql_tquery">edit</a>]</div>
[]()
##  mysql_tquery 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sends a query which will be executed in another thread and call a callback (if there was one specified) when the execution is successfully finished.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle, const query[], const callback[] = "", const format[] = "", {Float,_}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const query[]</td><td style="vertical-align: top;">The query you want to execute.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The query you want to process (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier string (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float,_}:...</td><td style="vertical-align: top;">Indefinite number of arguments (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if the query was successfully queued for execution, 0 otherwise.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">The callback must be a <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Public_functions" title="Public functions">public</a> function. That means it has to be <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Public_functions#Forwarding" title="Public functions">forwarded</a>.</span>
</td></tr></tbody></table>
</div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=34" title="Edit section: Format specifiers">edit</a>]</div>
[]()
####  Format specifiers 
<table class="wikitable">
<tbody><tr>
<th> Specifier </th><th>  Meaning
</th></tr>
<tr>
<td> d/i </td><td> integer number
</td></tr>
<tr>
<td> s</td><td> string
</td></tr>
<tr>
<td> f </td><td> floating point number
</td></tr>
<tr>
<td> b </td><td> boolean
</td></tr>
<tr>
<td> a </td><td> array (has to be followed by 'd'/'i' with the array length; the array length is also passed as a callback argument)
</td></tr>
<tr>
<td> r </td><td> reference
</td></tr></tbody></table>
<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER
<span style="color: rgb(102, 204, 102);">{</span>
	Id,
	Name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>,
	Stuff
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> Players<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">forward</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerConnect"><span style="color: rgb(220, 20, 60);">OnPlayerConnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>, pname<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/GetPlayerName"><span style="color: rgb(0, 100, 0);">GetPlayerName</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, pname, <span style="color: orange; font-weight: bold;">sizeof</span><span style="color: rgb(102, 204, 102);">(</span>pname<span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	mysql_format<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: orange; font-weight: bold;">sizeof</span><span style="color: rgb(102, 204, 102);">(</span>query<span style="color: rgb(102, 204, 102);">)</span>, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `players` WHERE `Name` LIKE '%e'"</span>, pname<span style="color: rgb(102, 204, 102);">)</span>;
	mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: rgb(178, 34, 34);">"OnPlayerDataLoaded"</span>, <span style="color: rgb(178, 34, 34);">"r"</span>, Players<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>player<span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">//Query processed, you can now execute cache functions (like cache_get_value_index) here.</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There are %d players with the name %s."</span>, cache_num_rows<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>, player<span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=35" title="Edit section: mysql_tquery_file">edit</a>]</div>
[]()
##  mysql_tquery_file 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">This native reads all queries from the specified file and executes them in a threaded manner.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle, const file_path[], const callback[] = "", const format[] = "", {Float,_}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const file_path[]</td><td style="vertical-align: top;">The file to read the queries from.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">The query you want to process (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const format[]</td><td style="vertical-align: top;">The format specifier string (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float,_}:...</td><td style="vertical-align: top;">Indefinite number of arguments (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if the query was successfully queued for execution, 0 otherwise.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a><br>
<p><strong>Notes</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">
<ul><li>Only files inside the scriptfiles directory are considered.
</li><li>The file path has to be absolute (relative to the scriptfiles directory), e.g. <i>folder1/../file.sql</i> is invalid.
</li><li>All queries have to end with a semicolon.
</li><li>Comments (starting with <i>#</i> or <i>-- </i>) are ignored (except C-style comments).
</li><li>Queries can be written over multiple lines.
</li><li>The callback must be a <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Public_functions" title="Public functions">public</a> function. That means it has to be <a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Public_functions#Forwarding" title="Public functions">forwarded</a>.
</li></ul>
<p>
</p>
</span></td></tr></tbody></table>
</div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnGameModeInit"><span style="color: rgb(220, 20, 60);">OnGameModeInit</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
    mysql_tquery_file<span style="color: rgb(102, 204, 102);">(</span>db_handle, <span style="color: rgb(178, 34, 34);">"my_tables.sql"</span>, OnDatabaseTablesChecked<span style="color: rgb(102, 204, 102);">)</span>;
    <span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">forward</span> OnDatabaseTablesChecked<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnDatabaseTablesChecked<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
    LoadHouses<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
    LoadVehicles<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
    <span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=36" title="Edit section: mysql_query">edit</a>]</div>
[]()
##  mysql_query 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">This native sends a non-threaded query to the MySQL server. The SA:MP server (the main PAWN thread) waits until the query has been executed and then returns the stored cache handle.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Notes</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">
<ul><li>Never send unthreaded queries unless you **really** know what you are doing.
</li><li>Use <a href="#cache_delete" title="MySQL/R40">cache_delete()</a> if you don't need the query's result anymore or you will experience memory leaks.
</li></ul>
<p>
</p>
</span></td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle, const query[], bool:use_cache = true)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const query[]</td><td style="vertical-align: top;">The query you want to execute.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">bool:use_cache</td><td style="vertical-align: top;">Set to true if you intend to use the cache/result mysql_query returns (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">A valid cache-id if <i>use_cache</i> was set to true, <i>MYSQL_INVALID_CACHE</i> otherwise<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">If <i>use_cache</i> is set to false, there won't be any valid cache to use, so all cache-related natives wont work. You also don't need to call <a href="#cache_delete" title="MySQL/R40">cache_delete()</a> in this case.</span>
</td></tr></tbody></table>
</div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> registered_players, <span style="color: orange;">Cache</span>:result = mysql_query<span style="color: rgb(102, 204, 102);">(</span>MySQL, <span style="color: rgb(178, 34, 34);">"SELECT COUNT(*) FROM `players`"</span><span style="color: rgb(102, 204, 102);">)</span>;
cache_get_value_int<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(65, 105, 225);">0</span>, registered_players<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There are %d players in the database."</span>, registered_players<span style="color: rgb(102, 204, 102);">)</span>;
cache_delete<span style="color: rgb(102, 204, 102);">(</span>result<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=37" title="Edit section: mysql_query_file">edit</a>]</div>
[]()
##  mysql_query_file 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">This native reads all queries from the specified file and executes them in in an unthreaded manner.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Don't send unthreaded queries unless you **really** know what you are doing.</span>
</td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle, const file_path[])  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const file_path[]</td><td style="vertical-align: top;">The file to read the queries from.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a><br>
<p><strong>Notes</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">
<ul><li>Only files inside the scriptfiles directory are considered.
</li><li>The file path has to be absolute (relative to the scriptfiles directory), e.g. <i>folder1/../file.sql</i> is invalid.
</li><li>All queries have to end with a semicolon.
</li><li>Comments (starting with <i>#</i> or <i>-- </i>) are ignored (except C-style comments).
</li><li>Queries can be written over multiple lines.
</li></ul>
<p>
</p>
</span></td></tr></tbody></table>
</div>
<br>

<pre class="pawn">mysql_query_file<span style="color: rgb(102, 204, 102);">(</span>g_Sql, <span style="color: rgb(178, 34, 34);">"players.sql"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=38" title="Edit section: mysql_errno">edit</a>]</div>
[]()
##  mysql_errno 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the error code of the error message from the previous MySQL operation.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Error code, 0 if no error occurred, -1 otherwise.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Only these natives can set an error code:
<ul><li>mysql_connect
</li><li>mysql_connect_file
</li><li>mysql_close
</li><li>mysql_escape_string
</li><li>mysql_format (uses mysql_escape_string internally if the <i>%e</i> specifier is used)
</li><li>mysql_query
</li><li>mysql_stat
</li><li>mysql_get_charset
</li><li>mysql_set_charset
</li></ul>
<p>
</p>
</span></td></tr></tbody></table>
</div>
<br>

<pre class="pawn">mysql_connect<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"127.0.0.1"</span>, <span style="color: rgb(178, 34, 34);">"root"</span>, <span style="color: rgb(178, 34, 34);">"mypass"</span>, <span style="color: rgb(178, 34, 34);">"mydatabase"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>mysql_errno<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>&nbsp;!= <span style="color: rgb(65, 105, 225);">0</span><span style="color: rgb(102, 204, 102);">)</span> 
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/print"><span style="color: rgb(0, 100, 0);">print</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Could not connect to database!"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=39" title="Edit section: mysql_error">edit</a>]</div>
[]()
##  mysql_error 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves the error message of the last unthreaded MySQL command<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store the data into.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The max. size of the destination string (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on error.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">MySQL</span>: handle, errno;
&nbsp;
handle = mysql_connect<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"127.0.0.1"</span>, <span style="color: rgb(178, 34, 34);">"root"</span>, <span style="color: rgb(178, 34, 34);">"mypass"</span>, <span style="color: rgb(178, 34, 34);">"mydatabase"</span><span style="color: rgb(102, 204, 102);">)</span>;
errno = mysql_errno<span style="color: rgb(102, 204, 102);">(</span>handle<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(65, 105, 225);">if</span> <span style="color: rgb(102, 204, 102);">(</span>errno&nbsp;!= <span style="color: rgb(65, 105, 225);">0</span><span style="color: rgb(102, 204, 102);">)</span> 
<span style="color: rgb(102, 204, 102);">{</span>
    <span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> error<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">100</span><span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
    mysql_error<span style="color: rgb(102, 204, 102);">(</span>error, <span style="color: orange; font-weight: bold;">sizeof</span> <span style="color: rgb(102, 204, 102);">(</span>error<span style="color: rgb(102, 204, 102);">)</span>, handle<span style="color: rgb(102, 204, 102);">)</span>;
    <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"[ERROR] #%d '%s'"</span>, errno, error<span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=40" title="Edit section: mysql_escape_string">edit</a>]</div>
[]()
##  mysql_escape_string 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Escapes special characters in a string for the use in a SQL statement. It prepends backslashes to the following characters: \x00, \n, \r, \, ', " and \x1a.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Always use this function (if you don't use <a href="#mysql_format" title="MySQL/R40">mysql_format()</a> with the '%e' specifier) before inserting user inputs in a query. You can be victim of a <a href="https://web.archive.org/web/20190415235016/http://en.wikipedia.org/wiki/SQL_injection" class="external text" title="http://en.wikipedia.org/wiki/SQL_injection" rel="nofollow">SQL injection</a> if you do not do so.</span>
</td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(const source[], destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const source[]</td><td style="vertical-align: top;">The string you want to be escaped.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store escaped data in.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The size of the destination (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Length of escaped string, -1 on error.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;"><i>%</i> and <i>_</i> are not escaped. These are wildcards in MySQL if combined with LIKE, GRANT, or REVOKE.</span>
</td></tr></tbody></table>
</div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Notes</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">
<ul><li> You have to provide the size (<i>max_len</i>) by yourself if you use an enum-array as destination.
</li><li> If the <i>destination</i> cannot hold the whole text escaped, the function will return -1 and leave <i>destination</i> unchanged.
</li></ul>
</span></td></tr></tbody></table>
</div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER <span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
	LastMsg<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>,
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> PlayerInfo<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerText"><span style="color: rgb(220, 20, 60);">OnPlayerText</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, text<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> escape<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">140</span>*<span style="color: rgb(65, 105, 225);">2</span><span style="color: rgb(65, 105, 225);">+1</span><span style="color: rgb(102, 204, 102);">]</span>;
	mysql_escape_string<span style="color: rgb(102, 204, 102);">(</span>text, escape<span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//string is now safe to be put in a query</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
	mysql_escape_string<span style="color: rgb(102, 204, 102);">(</span>text, PlayerInfo<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>LastMsg<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">)</span>; <span style="color: rgb(128, 128, 128); font-style: italic;">//correctly saves the escaped string into an enum-array</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=41" title="Edit section: mysql_format">edit</a>]</div>
[]()
##  mysql_format 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;"> Allows you to format a string which you can safely use in a query.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(MySQL:handle, output[], len, format[], {Float,_}:...)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">output[]</td><td style="vertical-align: top;">The string to save the result to.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">len</td><td style="vertical-align: top;">The size of the output.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">format[]</td><td style="vertical-align: top;">The format string.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">{Float,_}:...</td><td style="vertical-align: top;">Indefinite number of arguments.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Length of the formatted string.<br></div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=42" title="Edit section: Format strings">edit</a>]</div>
[]()
####  Format strings 
<table class="wikitable">
<tbody><tr>
<th> Placeholder </th><th>  Meaning
</th></tr>
<tr>
<td> %% </td><td> Literal <i>%</i>.
</td></tr>
<tr>
<td> %e </td><td> Escaped string (escapes directly without the need to call <i>mysql_escape_string()</i> before).
</td></tr>
<tr>
<td> %s </td><td> Normal string.
</td></tr>
<tr>
<td> %d / %i </td><td> Decimal number.
</td></tr>
<tr>
<td> %o </td><td> Octal number.
</td></tr>
<tr>
<td> %f </td><td> Floating point number (will print INF and NAN in lowercase).
</td></tr>
<tr>
<td> %F </td><td> Floating point number (will print INF and NAN in uppercase).
</td></tr>
<tr>
<td> %X </td><td> Hexadecimal number in uppercase.
</td></tr>
<tr>
<td> %x </td><td> Hexadecimal number in lowercase.
</td></tr>
<tr>
<td> %b </td><td> Binary number.
</td></tr>
<tr>
<td> %u </td><td> Unsigned decimal number.
</td></tr>
<tr>
<td> %a / %A </td><td> Hexadecimal floating point number (lowercase/uppercase)
</td></tr>
<tr>
<td> %g / %g </td><td> Floating point number in scientific notation (lowercase/uppercase, like %f/%F)
</td></tr></tbody></table>

The values for the placeholders follow in the exact same order as parameters in the call.

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>;
mysql_format<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: orange; font-weight: bold;">sizeof</span><span style="color: rgb(102, 204, 102);">(</span>query<span style="color: rgb(102, 204, 102);">)</span>, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `%s` WHERE `bar` = '%e' AND `foobar` = '%f' LIMIT %d"</span>, <span style="color: rgb(178, 34, 34);">"foobar"</span>, <span style="color: rgb(178, 34, 34);">"escape'me<span style="color: rgb(0, 0, 153); font-weight: bold;">\"</span>please"</span>, <span style="color: rgb(65, 105, 225);">1.2345</span>, <span style="color: rgb(65, 105, 225);">1337</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// the variable 'query' contains now the formatted query (including the escaped string)</span>
mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: rgb(178, 34, 34);">"OnStuffSelected"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=43" title="Edit section: mysql_set_charset">edit</a>]</div>
[]()
##  mysql_set_charset 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Use this function to change the character set the connection uses. Very useful for servers which often process data with foreign characters.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(const charset[], MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const charset[]</td><td style="vertical-align: top;">Character set you want to use.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on fail.<br></div>
<br>

<pre class="pawn">mysql_set_charset<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"utf8"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=44" title="Edit section: mysql_get_charset">edit</a>]</div>
[]()
##  mysql_get_charset 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Use this function to get the current character set in use.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store extracted data in.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The size of the destination string (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on fail.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> charset<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">20</span><span style="color: rgb(102, 204, 102);">]</span>;
mysql_get_charset<span style="color: rgb(102, 204, 102);">(</span>charset<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=45" title="Edit section: mysql_stat">edit</a>]</div>
[]()
##  mysql_stat 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Use this function to retrieve the status of the MySQL server.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store extracted data in.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The size of the destination string (optional).</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this will be processed on (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on fail.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> stats<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">150</span><span style="color: rgb(102, 204, 102);">]</span>; 
mysql_stat<span style="color: rgb(102, 204, 102);">(</span>stats<span style="color: rgb(102, 204, 102);">)</span>; 
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/print"><span style="color: rgb(0, 100, 0);">print</span></a><span style="color: rgb(102, 204, 102);">(</span>stats<span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<span style="color: rgb(128, 128, 128); font-style: italic;">//Output would be something like:</span>
<span style="color: rgb(128, 128, 128); font-style: italic;">// Uptime: 380  Threads: 1  Questions: 3  Slow queries: 0  Opens: 12  Flush tables: 1  </span>
<span style="color: rgb(128, 128, 128); font-style: italic;">// Open tables: 6  Queries per second avg: 0.008</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=46" title="Edit section: Cache functions">edit</a>]</div>
[]()
#  Cache functions 
<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Make sure you use these functions (except cache_delete(), cache_set_active(), cache_unset_active(), cache_is_any_active() and cache_is_valid()) only if there is an active cache available.</span>
</td></tr></tbody></table>
</div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=47" title="Edit section: cache_get_row_count">edit</a>]</div>
[]()
##  cache_get_row_count 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the number of rows.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(&amp;destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;destination</td><td style="vertical-align: top;">Variable to store the number of rows into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> row_count;
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>!cache_get_row_count<span style="color: rgb(102, 204, 102);">(</span>row_count<span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"couldn't retrieve row count"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">else</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There are %d rows in the current result set."</span>, row_count<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=48" title="Edit section: cache_get_field_count">edit</a>]</div>
[]()
##  cache_get_field_count 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the number of fields.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(&amp;destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;destination</td><td style="vertical-align: top;">Variable to store the number of fields into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> field_count;
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>!cache_get_field_count<span style="color: rgb(102, 204, 102);">(</span>field_count<span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"couldn't retrieve field count"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">else</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"There are %d fields in the current result set."</span>, field_count<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=49" title="Edit section: cache_get_result_count">edit</a>]</div>
[]()
##  cache_get_result_count 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the number of available results.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(&amp;destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;destination</td><td style="vertical-align: top;">Variable to store the number of results into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> result_count;
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>!cache_get_result_count<span style="color: rgb(102, 204, 102);">(</span>result_count<span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
	<span style="color: orange; font-weight: bold;">return</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"couldn't retrieve result count"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"we will now go through all %d results:"</span>, result_count<span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">for</span><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> r; r &lt; result_count; r++<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	cache_set_result<span style="color: rgb(102, 204, 102);">(</span>r<span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> rows = cache_num_rows<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"<span style="color: rgb(0, 0, 153); font-weight: bold;">\t</span>%d rows in %d. result"</span>, rows, r<span style="color: rgb(65, 105, 225);">+1</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=50" title="Edit section: cache_get_field_name">edit</a>]</div>
[]()
##  cache_get_field_name 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a fields name specified by its index.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(field_index, destination[], max_len = sizeof(destination))  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">field_index</td><td style="vertical-align: top;">The index of the field whose name to retrieve.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store the name into.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The size of the destination string (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> field_name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">32</span><span style="color: rgb(102, 204, 102);">]</span>;
cache_get_field_name<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, field_name<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The first field name in the current result set is '%s'."</span>, field_name<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=51" title="Edit section: cache_get_field_type">edit</a>]</div>
[]()
##  cache_get_field_type 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns a fields type specified by its index.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(field_index)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">field_index</td><td style="vertical-align: top;">The index of the field whose type to return.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Field type or <i>MYSQL_TYPE_INVALID</i> on error.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">E_MYSQL_FIELD_TYPE</span>:type = cache_get_field_type<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>type == MYSQL_TYPE_VAR_STRING<span style="color: rgb(102, 204, 102);">)</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The first field is of type VARCHAR."</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=52" title="Edit section: cache_set_result">edit</a>]</div>
[]()
##  cache_set_result 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sets an result as active, specified by an index.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(result_index)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">result_index</td><td style="vertical-align: top;">The index of the result to set active.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> result_count;
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>!cache_get_result_count<span style="color: rgb(102, 204, 102);">(</span>result_count<span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
	<span style="color: orange; font-weight: bold;">return</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"couldn't retrieve result count"</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"we will now go through all %d results:"</span>, result_count<span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">for</span><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> r; r &lt; result_count; r++<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	cache_set_result<span style="color: rgb(102, 204, 102);">(</span>r<span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> rows = cache_num_rows<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"<span style="color: rgb(0, 0, 153); font-weight: bold;">\t</span>%d rows in %d. result"</span>, rows, r<span style="color: rgb(65, 105, 225);">+1</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=53" title="Edit section: cache_get_value_index">edit</a>]</div>
[]()
##  cache_get_value_index 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a value from the result set as a string.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, column_idx, destination[], max_len = sizeof(destination))  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">column_idx</td><td style="vertical-align: top;">The column index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store the data into.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The max. size of the destination string (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">You have to provide the size (<i>max_len</i>) by yourself if you use an enum-array as destination.</span>
</td></tr></tbody></table>
</div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> dest<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>;
cache_get_value_index<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(65, 105, 225);">0</span>, dest<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The very first value in the current result set is '%s'."</span>, dest<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=54" title="Edit section: cache_get_value_index_int">edit</a>]</div>
[]()
##  cache_get_value_index_int 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a value from the result set as a decimal number.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, column_idx, &amp;destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">column_idx</td><td style="vertical-align: top;">The column index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;destination</td><td style="vertical-align: top;">The variable to store the number into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> int_dest;
cache_get_value_index_int<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">3</span>, <span style="color: rgb(65, 105, 225);">0</span>, int_dest<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The number stored in the fourth row and first column is '%d'."</span>, int_dest<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=55" title="Edit section: cache_get_value_index_float">edit</a>]</div>
[]()
##  cache_get_value_index_float 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a value from the result set as a floating point number.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, column_idx, &amp;Float:destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">column_idx</td><td style="vertical-align: top;">The column index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;Float:destination</td><td style="vertical-align: top;">The variable to store the float into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">Float</span>:float_dest;
cache_get_row_float<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">3</span>, <span style="color: rgb(65, 105, 225);">4</span>, float_dest<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The floating point number stored in the fourth row and fifth column is '%f'."</span>, float_dest<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=56" title="Edit section: cache_is_value_index_null">edit</a>]</div>
[]()
##  cache_is_value_index_null 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieve a boolean value on whether the specified column is <i>NULL</i> or not.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, column_idx, &amp;bool:destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">column_idx</td><td style="vertical-align: top;">The column index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;bool:destination</td><td style="vertical-align: top;">The variable to set to true/false, whether the value is <i>NULL</i> or not.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">bool</span>:is_null;
cache_is_value_index_null<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">3</span>, <span style="color: rgb(65, 105, 225);">4</span>, is_null<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The value in the fourth row and fifth column %s 'NULL'."</span>, is_null&nbsp;? <span style="color: rgb(178, 34, 34);">"is"</span>&nbsp;: <span style="color: rgb(178, 34, 34);">"is not"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=57" title="Edit section: cache_get_value_name">edit</a>]</div>
[]()
##  cache_get_value_name 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a value from the result set as a string.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, const column_name[], destination[], max_len = sizeof(destination))  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const column_name[]</td><td style="vertical-align: top;">The column name.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store the data into.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The size of the destination string (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 234, 234); border-left-color: rgb(252, 169, 169); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(252, 169, 169); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Circle-style-warning.png" class="image" title="Image:32px-Circle-style-warning.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/5/57/32px-Circle-style-warning.png" alt="Image:32px-Circle-style-warning.png" width="32" height="32" longdesc="/wiki/Image:32px-Circle-style-warning.png"></a><br>
<p><strong>Important<br>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">You have to provide the size (<i>max_len</i>) by yourself if you use an enum-array as destination.</span>
</td></tr></tbody></table>
</div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> dest<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>;
cache_get_value_name<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(178, 34, 34);">"name"</span>, dest<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The value in the column 'name' is '%s'."</span>, dest<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=58" title="Edit section: cache_get_value_name_int">edit</a>]</div>
[]()
##  cache_get_value_name_int 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a value from the result set as a decimal number.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, const column_name[], &amp;destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const column_name[]</td><td style="vertical-align: top;">The column name.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;destination</td><td style="vertical-align: top;">The variable to store the number into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> int_dest;
cache_get_value_name_int<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">2</span>, <span style="color: rgb(178, 34, 34);">"money"</span>, int_dest<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The value in the third row and in the column 'money' is '%d'."</span>, int_dest<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=59" title="Edit section: cache_get_value_name_float">edit</a>]</div>
[]()
##  cache_get_value_name_float 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves a value from the result set as an floating point number.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, const column_name[], &amp;Float:destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const column_name[]</td><td style="vertical-align: top;">The column name.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;Float:destination</td><td style="vertical-align: top;">The variable to store the float into.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">Float</span>:float_dest;
cache_get_value_name_float<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">3</span>, <span style="color: rgb(178, 34, 34);">"pos_x"</span>, float_dest<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The value in the fourth row and in the column 'pos_x' is '%f'."</span>, float_dest<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=60" title="Edit section: cache_is_value_name_null">edit</a>]</div>
[]()
##  cache_is_value_name_null 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieve a boolean value on whether the specified column is <i>NULL</i> or not.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(row_idx, const column_name[], &amp;bool:destination)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">row_idx</td><td style="vertical-align: top;">The row index (starts at '0').</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const column_name[]</td><td style="vertical-align: top;">The column name.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">&amp;bool:destination</td><td style="vertical-align: top;">The variable to set to true/false, whether the value is <i>NULL</i> or not.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> <span style="color: orange;">bool</span>:is_null;
cache_is_value_name_null<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">3</span>, <span style="color: rgb(178, 34, 34);">"date"</span>, is_null<span style="color: rgb(102, 204, 102);">)</span>;
<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The value in the fourth row and in the column 'date' %s 'NULL'."</span>, is_null&nbsp;? <span style="color: rgb(178, 34, 34);">"is"</span>&nbsp;: <span style="color: rgb(178, 34, 34);">"is not"</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=61" title="Edit section: cache_save">edit</a>]</div>
[]()
##  cache_save 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Saves the active cache in the memory and returns an cache-id to access it for later use.<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Valid cache-id on success or <i>MYSQL_INVALID_CACHE</i> on failure.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER <span style="color: rgb(102, 204, 102);">{</span>
	ID,
	Name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>,
	<span style="color: orange;">Cache</span>:Data,
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> Player<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerConnect"><span style="color: rgb(220, 20, 60);">OnPlayerConnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">128</span><span style="color: rgb(102, 204, 102);">]</span>;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/GetPlayerName"><span style="color: rgb(0, 100, 0);">GetPlayerName</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	mysql_format<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: orange; font-weight: bold;">sizeof</span><span style="color: rgb(102, 204, 102);">(</span>query<span style="color: rgb(102, 204, 102);">)</span>, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `players` WHERE `name` = '%e' LIMIT 1"</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Name<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, query, <span style="color: rgb(178, 34, 34);">"OnPlayerDataLoaded"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">forward</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerDataLoaded<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>cache_num_rows<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span> == <span style="color: rgb(65, 105, 225);">1</span><span style="color: rgb(102, 204, 102);">)</span>
	<span style="color: rgb(102, 204, 102);">{</span>
		<span style="color: rgb(128, 128, 128); font-style: italic;">//save the cache for later use</span>
		Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span> = cache_save<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
		<span style="color: rgb(128, 128, 128); font-style: italic;">//show login dialog</span>
		<span style="color: rgb(128, 128, 128); font-style: italic;">// ShowPlayerDialog(playerid, ...</span>
	<span style="color: rgb(102, 204, 102);">}</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">// else //show register dialog</span>
		<span style="color: rgb(128, 128, 128); font-style: italic;">// ShowPlayerDialog(playerid, ...</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=62" title="Edit section: cache_delete">edit</a>]</div>
[]()
##  cache_delete 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Deletes the specified cache from the memory.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(Cache:cache_id)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">Cache:cache_id</td><td style="vertical-align: top;">The cache-id which should be deleted.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on fail.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER <span style="color: rgb(102, 204, 102);">{</span>
	ID,
	Name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>,
	<span style="color: orange;">Cache</span>:Data,
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> Player<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerDisconnect"><span style="color: rgb(220, 20, 60);">OnPlayerDisconnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, reason<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	cache_delete<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=63" title="Edit section: cache_set_active">edit</a>]</div>
[]()
##  cache_set_active 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Sets the specified cache as the active cache.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(Cache:cache_id)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">Cache:cache_id</td><td style="vertical-align: top;">The cache-id which should be set as active.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on fail.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER <span style="color: rgb(102, 204, 102);">{</span>
	ID,
	Name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>,
	<span style="color: orange;">Cache</span>:Data,
	Money,
	<span style="color: orange;">Float</span>:PosX,
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> Player<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnDialogResponse<span style="color: rgb(102, 204, 102);">(</span>playerid, dialogid, response, listitem, inputtext<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(65, 105, 225);">switch</span><span style="color: rgb(102, 204, 102);">(</span>dialogid<span style="color: rgb(102, 204, 102);">)</span>
	<span style="color: rgb(102, 204, 102);">{</span>
		<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
		<span style="color: orange; font-weight: bold;">case</span> DIALOG_LOGIN:
		<span style="color: rgb(102, 204, 102);">{</span>
			<span style="color: rgb(128, 128, 128); font-style: italic;">//if password matches</span>
			cache_set_active<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
			cache_get_value_int<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(178, 34, 34);">"money"</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
			cache_get_value_float<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(178, 34, 34);">"pos_x"</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
			<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
			cache_unset_active<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>; 
		<span style="color: rgb(102, 204, 102);">}</span>
		<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
		<span style="color: orange;">default</span>:
			<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">0</span>;
	<span style="color: rgb(102, 204, 102);">}</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=64" title="Edit section: cache_unset_active">edit</a>]</div>
[]()
##  cache_unset_active 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Unsets the active cache.<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">This function does not return any specific values.<br></div>
<br>

<pre class="pawn">cache_set_active<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
cache_get_value_int<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(178, 34, 34);">"money"</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Money<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
cache_unset_active<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>; 
<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>cache_get_value_float<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(65, 105, 225);">0</span>, <span style="color: rgb(178, 34, 34);">"pos_x"</span>, Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>PosX<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"data was successfully retrieved, this should NOT happen!"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(65, 105, 225);">else</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"there is no active cache, because we just unset it."</span><span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=65" title="Edit section: cache_is_any_active">edit</a>]</div>
[]()
##  cache_is_any_active 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Checks whether there is an active cache.<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if there is an active cache, 0 otherwise.<br></div>
<br>

<pre class="pawn">cache_set_active<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">assert</span><span style="color: rgb(102, 204, 102);">(</span>cache_is_any_active<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span> == true<span style="color: rgb(102, 204, 102);">)</span>;
cache_unset_active<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>; 
<span style="color: rgb(34, 139, 34); font-weight: bold;">assert</span><span style="color: rgb(102, 204, 102);">(</span>cache_is_any_active<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span> == false<span style="color: rgb(102, 204, 102);">)</span>;</pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=66" title="Edit section: cache_is_valid">edit</a>]</div>
[]()
##  cache_is_valid 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Checks if the specified cache is valid.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(Cache:cache_id)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">Cache:cache_id</td><td style="vertical-align: top;">The cache-id which should be checked.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 if valid, 0 if invalid.<br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">enum</span> E_PLAYER <span style="color: rgb(102, 204, 102);">{</span>
	ID,
	Name<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYER_NAME</span><span style="color: rgb(102, 204, 102);">]</span>,
	<span style="color: orange;">Cache</span>:Data,
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(102, 204, 102);">}</span>;
<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> Player<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(233, 150, 122); font-weight: bold;">MAX_PLAYERS</span><span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>E_PLAYER<span style="color: rgb(102, 204, 102);">]</span>;
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerUpdate<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">//if random event...</span>
	cache_delete<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span>
&nbsp;
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> <a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/OnPlayerDisconnect"><span style="color: rgb(220, 20, 60);">OnPlayerDisconnect</span></a><span style="color: rgb(102, 204, 102);">(</span>playerid, reason<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>cache_is_valid<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
		cache_delete<span style="color: rgb(102, 204, 102);">(</span>Player<span style="color: rgb(102, 204, 102);">[</span>playerid<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">[</span>Data<span style="color: rgb(102, 204, 102);">]</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
&nbsp;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=67" title="Edit section: cache_affected_rows">edit</a>]</div>
[]()
##  cache_affected_rows 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the number of affected rows if the query was an INSERT, UPDATE, REPLACE or DELETE query.<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">If the last query was a DELETE query with no WHERE clause, all of the records will be deleted from the table but this function will return zero.</span>
</td></tr></tbody></table>
</div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Number of affected rows, -1 on error<br></div>
<br>

<pre class="pawn">mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, <span style="color: rgb(178, 34, 34);">"DELETE FROM mylogs WHERE log_id &gt; 10"</span>, <span style="color: rgb(178, 34, 34);">"OnLogsDeleted"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnLogsDeleted<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"%d logs deleted!"</span>, cache_affected_rows<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=68" title="Edit section: cache_warning_count">edit</a>]</div>
[]()
##  cache_warning_count 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the number of warnings the sent query generated.<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Number of warnings, -1 on error.<br></div>
<br>

<pre class="pawn">mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, <span style="color: rgb(178, 34, 34);">"DROP TABLE IF EXISTS `nope`"</span>, <span style="color: rgb(178, 34, 34);">"OnStuffHappened"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnStuffUpdated<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(65, 105, 225);">if</span><span style="color: rgb(102, 204, 102);">(</span>cache_warning_count<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>
		<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"table 'nope' doesn't exist."</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=69" title="Edit section: cache_insert_id">edit</a>]</div>
[]()
##  cache_insert_id 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Retrieves the ID generated for an AUTO_INCREMENT column by the sent query (usually INSERT).<br></div>
<br>


<b>Parameters:</b><div style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">This function has no parameters  
</div>

<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">new ID generated for an AUTO_INCREMENT column, -1 on error.<br></div>
<br>

<pre class="pawn">mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, <span style="color: rgb(178, 34, 34);">"INSERT INTO `players` (`name`, `password`) VALUES ('Ownage', MD5('mypass'))"</span>, <span style="color: rgb(178, 34, 34);">"OnPlayerRegister"</span>, <span style="color: rgb(178, 34, 34);">"d"</span>, playerid<span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnPlayerRegister<span style="color: rgb(102, 204, 102);">(</span>playerid<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"New player registered with ID '%d'."</span>, cache_insert_id<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=70" title="Edit section: cache_get_query_exec_time">edit</a>]</div>
[]()
##  cache_get_query_exec_time 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the time the query took to be executed.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(E_EXECTIME_UNIT:unit = UNIT_MICROSECONDS)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">E_EXECTIME_UNIT:unit</td><td style="vertical-align: top;">Time unit which should be used for the execution time (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">Execution time as positive number, -1 on error.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Buffer overflows may occur if using microseconds as unit in combination with long queries.</span>
</td></tr></tbody></table>
</div>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=71" title="Edit section: Time units">edit</a>]</div>
[]()
####  Time units 
<table class="wikitable">
<tbody><tr>
<th> Unit
</th></tr>
<tr>
<td> UNIT_MILLISECONDS
</td></tr>
<tr>
<td> UNIT_MICROSECONDS
</td></tr></tbody></table>
<pre class="pawn">mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `data`"</span>, <span style="color: rgb(178, 34, 34);">"OnDataRetrieved"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnDataRetrieved<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"The query <span style="color: rgb(0, 0, 153); font-weight: bold;">\"</span>SELECT * FROM `data`<span style="color: rgb(0, 0, 153); font-weight: bold;">\"</span> took %d milliseconds / %d microseconds to execute."</span>,
		cache_get_query_exec_time<span style="color: rgb(102, 204, 102);">(</span>UNIT_MILLISECONDS<span style="color: rgb(102, 204, 102);">)</span>, cache_get_query_exec_time<span style="color: rgb(102, 204, 102);">(</span>UNIT_MICROSECONDS<span style="color: rgb(102, 204, 102);">)</span><span style="color: rgb(102, 204, 102);">)</span>;
&nbsp;
	<span style="color: rgb(128, 128, 128); font-style: italic;">//output:</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">//	The query "SELECT * FROM `data`" took 9 milliseconds / 9311 microseconds to execute.</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<br>

<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=72" title="Edit section: cache_get_query_string">edit</a>]</div>
[]()
##  cache_get_query_string 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">Returns the query which was executed as string.<br></div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(destination[], max_len = sizeof(destination))  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">destination[]</td><td style="vertical-align: top;">The string to store the query into.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">max_len</td><td style="vertical-align: top;">The maximal size of the destination string (optional).</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">1 on success, 0 on error.<br></div>
<br>

<pre class="pawn">mysql_tquery<span style="color: rgb(102, 204, 102);">(</span>MySQL, <span style="color: rgb(178, 34, 34);">"SELECT * FROM `data`"</span>, <span style="color: rgb(178, 34, 34);">"OnDataRetrieved"</span><span style="color: rgb(102, 204, 102);">)</span>;
<span style="color: rgb(128, 128, 128); font-style: italic;">// ...</span>
<span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnDataRetrieved<span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(34, 139, 34); font-weight: bold;">new</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(65, 105, 225);">64</span><span style="color: rgb(102, 204, 102);">]</span>;
	cache_get_query_string<span style="color: rgb(102, 204, 102);">(</span>query<span style="color: rgb(102, 204, 102);">)</span>;
	<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Executed query: <span style="color: rgb(0, 0, 153); font-weight: bold;">\"</span>%s<span style="color: rgb(0, 0, 153); font-weight: bold;">\"</span>"</span>, query<span style="color: rgb(102, 204, 102);">)</span>;
	<span style="color: rgb(128, 128, 128); font-style: italic;">//output:</span>
	<span style="color: rgb(128, 128, 128); font-style: italic;">//	Executed query: "SELECT * FROM `data`"</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=73" title="Edit section: Plugin callbacks">edit</a>]</div>
[]()
#  Plugin callbacks 
<div class="editsection" style="float: right; margin-left: 5px;">[<a href="/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&amp;action=edit&amp;section=74" title="Edit section: OnQueryError">edit</a>]</div>
[]()
##  OnQueryError 
<b>Description:</b>  
&#10;
<div class="description" style="padding-left: 35px;">This callback is called when an error occurs while processing a query.<br></div>
<br>

<div style="max-width: 750px; width: auto;">
<table style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; background-color: rgb(255, 238, 204); border-left-color: rgb(255, 191, 127); border-left-style: solid; border-left-width: 10px;">

<tbody><tr>
<td align="center" style="padding-right: 10px; padding-left: 5px; border-right-color: rgb(255, 191, 127); border-right-style: solid; border-right-width: 1px;"><a href="/web/20190415235016/https://wiki.sa-mp.com/wiki/Image:32px-Ambox_warning_orange.png" class="image" title="Image:32px-Ambox_warning_orange.png"><img src="/web/20190415235016im_/https://wiki.sa-mp.com/wroot/images2/6/65/32px-Ambox_warning_orange.png" alt="Image:32px-Ambox_warning_orange.png" width="32" height="28" longdesc="/wiki/Image:32px-Ambox_warning_orange.png"></a>
<p><strong>Note</strong>
</p>
</td><td align="left" style="padding-left: 10px; padding-right: 7px;"><span style="font-size: 14px;">Common error codes for <a href="https://web.archive.org/web/20190415235016/http://dev.mysql.com/doc/refman/5.5/en/error-messages-client.html" class="external text" title="http://dev.mysql.com/doc/refman/5.5/en/error-messages-client.html" rel="nofollow">client</a> and <a href="https://web.archive.org/web/20190415235016/http://dev.mysql.com/doc/refman/5.5/en/error-messages-server.html" class="external text" title="http://dev.mysql.com/doc/refman/5.5/en/error-messages-server.html" rel="nofollow">server</a>.</span>
</td></tr></tbody></table>
</div>
<br>


<b>Parameters:</b><div class="parameters" style="padding-top: 2px; padding-right: 2px; padding-bottom: 2px; padding-left: 5px; margin-left: 35px; margin-top: 10px; font-family: Courier New; border-bottom-color: rgb(170, 170, 170); border-bottom-style: solid; border-bottom-width: 1px; border-right-color: rgb(170, 170, 170); border-right-style: solid; border-right-width: 1px; width: 75%; background-color: rgb(244, 248, 251);">(errorid, const error[], const callback[], const query[], MySQL:handle)  
</div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">errorid</td><td style="vertical-align: top;">ID of the error.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const error[]</td><td style="vertical-align: top;">Error message.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const callback[]</td><td style="vertical-align: top;">Name of the result callback. Will be empty if there was none.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">const query[]</td><td style="vertical-align: top;">Query which was executed.</td></tr></tbody></table></div>
<div class="param" style="padding-left: 50px;"><table><tbody><tr><td style="vertical-align: top; width: 150px; font-family: &quot;Courier New&quot;;">MySQL:handle</td><td style="vertical-align: top;">The connection handle this was processed on.</td></tr></tbody></table></div>
<br>
<b>Return Values:</b>  
&#10;
<div style="padding-left: 35px;">This callback does not handle returns. <br></div>
<br>

<pre class="pawn"><span style="color: rgb(34, 139, 34); font-weight: bold;">public</span> OnQueryError<span style="color: rgb(102, 204, 102);">(</span>errorid, <span style="color: rgb(34, 139, 34); font-weight: bold;">const</span> error<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(34, 139, 34); font-weight: bold;">const</span> callback<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(102, 204, 102);">]</span>, <span style="color: rgb(34, 139, 34); font-weight: bold;">const</span> query<span style="color: rgb(102, 204, 102);">[</span><span style="color: rgb(102, 204, 102);">]</span>, <span style="color: orange;">MySQL</span>:handle<span style="color: rgb(102, 204, 102);">)</span>
<span style="color: rgb(102, 204, 102);">{</span>
	<span style="color: rgb(65, 105, 225);">switch</span><span style="color: rgb(102, 204, 102);">(</span>errorid<span style="color: rgb(102, 204, 102);">)</span>
	<span style="color: rgb(102, 204, 102);">{</span>
		<span style="color: orange; font-weight: bold;">case</span> CR_SERVER_GONE_ERROR:
		<span style="color: rgb(102, 204, 102);">{</span>
			<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Lost connection to server"</span><span style="color: rgb(102, 204, 102);">)</span>;
		<span style="color: rgb(102, 204, 102);">}</span>
		<span style="color: orange; font-weight: bold;">case</span> ER_SYNTAX_ERROR:
		<span style="color: rgb(102, 204, 102);">{</span>
			<a href="https://web.archive.org/web/20190415235016/http://wiki.sa-mp.com/wiki/printf"><span style="color: rgb(0, 100, 0);">printf</span></a><span style="color: rgb(102, 204, 102);">(</span><span style="color: rgb(178, 34, 34);">"Something is wrong in your syntax, query: %s"</span>,query<span style="color: rgb(102, 204, 102);">)</span>;
		<span style="color: rgb(102, 204, 102);">}</span>
	<span style="color: rgb(102, 204, 102);">}</span>
	<span style="color: orange; font-weight: bold;">return</span> <span style="color: rgb(65, 105, 225);">1</span>;
<span style="color: rgb(102, 204, 102);">}</span></pre>


<div class="printfooter">
Retrieved from "<a href="">https://wiki.sa-mp.com/wiki/MySQL/R40</a>"</div>
			<div id="catlinks">

[Category](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=Special:Categories&article=MySQL%2FR40 "Special:Categories"): <span dir="ltr">[Plugin Documentation](/web/20190415235016/https://wiki.sa-mp.com/wiki/Category:Plugin_Documentation "Category:Plugin Documentation")</span>

</div>			
			<div class="visualClear"></div>
		</div>
	</div>
		</div>
		<div id="column-one">
	<div id="p-cactions" class="portlet">
		##### Views
		
				 - [Article]()
				 - [Discussion](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=Talk:MySQL/R40&action=edit)
				 - [Edit](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&action=edit)
				 - [History](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&action=history)
		
	</div>
	<div class="portlet" id="p-personal">
		##### Personal tools
		<div class="pBody">
			
				- [203.86.193.213](/web/20190415235016/https://wiki.sa-mp.com/wiki/User:203.86.193.213)
				- [Talk for this IP](/web/20190415235016/https://wiki.sa-mp.com/wiki/User_talk:203.86.193.213)
				- [Log in / create account](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=Special:Userlogin&returnto=MySQL/R40)
			
		</div>
	</div>
	<div class="portlet" id="p-logo">
		[](/web/20190415235016/https://wiki.sa-mp.com/wiki/Main_Page "Main Page")
	</div>
	
		<div class="portlet" id="p-navigation">
		##### Navigation
		<div class="pBody">
			
				- [Main Page](/web/20190415235016/https://wiki.sa-mp.com/wiki/Main_Page)
				- [Recent changes](/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Recentchanges)
				- [Random page](/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Random)
				- [Help](/web/20190415235016/https://wiki.sa-mp.com/wiki/Help:Contents)
			
		</div>
	</div>
		<div id="p-search" class="portlet">
		##### <label for="searchInput">Search</label>
		<div id="searchBody" class="pBody">
			<form action="/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Search" id="searchform"><div>
				<input id="searchInput" name="search" type="text" accesskey="f" value="">
				<input type="submit" name="go" class="searchButton" id="searchGoButton" value="Go">&nbsp;
				<input type="submit" name="fulltext" class="searchButton" value="Search">
			</div></form>
		</div>
	</div>
	<div class="portlet" id="p-tb">
		##### Toolbox
		<div class="pBody">
			
				- [What links here](/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Whatlinkshere/MySQL/R40)
				- [Related changes](/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Recentchangeslinked/MySQL/R40)
- [Upload file](/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Upload)
- [Special pages](/web/20190415235016/https://wiki.sa-mp.com/wiki/Special:Specialpages)
				- [Printable version](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&printable=yes)				- [Permanent link](/web/20190415235016/https://wiki.sa-mp.com/wroot/index.php?title=MySQL/R40&oldid=39260)			
		</div>
	</div>
		</div>
			<div class="visualClear"></div>
			<div id="footer">
				<div id="f-poweredbyico">[![MediaWiki](/web/20190415235016im_/https://wiki.sa-mp.com/wroot/skins/common/images/poweredby_mediawiki_88x31.png)](https://web.archive.org/web/20190415235016/http://www.mediawiki.org/)</div>
			
				-  This page was last modified 21:08, 31 January 2019.
				- This page has been accessed 61,243 times.
				- [Privacy policy](/web/20190415235016/https://wiki.sa-mp.com/wiki/SA-MP_Wiki:Privacy_policy "SA-MP Wiki:Privacy policy")
				- [About SA-MP Wiki](/web/20190415235016/https://wiki.sa-mp.com/wiki/SA-MP_Wiki:About "SA-MP Wiki:About")
				- [Disclaimers](/web/20190415235016/https://wiki.sa-mp.com/wiki/SA-MP_Wiki:General_disclaimer "SA-MP Wiki:General disclaimer")
			
		</div>
	
</div>



