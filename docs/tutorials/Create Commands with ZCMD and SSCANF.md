![](images/icons/icon1.gif) **How to create commands with ZCMD & sscanf**

* * *

How to create commands with ZCMD & sscanf.

  
**Introduction**  
  
(This is my first tutorial ^^)  
  
ZCMD is a fast and simple command processor made by Zeex so I will teach you guys who don't know to work with.  
Sscanf is string splitting routine made by \*\*\*\*\*\*.  
  
**What do we need?**  
  
First, we will need the IZCMD include and then  
sscanf include and plugin.  
  
**Steps**  
  
Copy izcmd.inc and paste it into your pawno\\includes folder.  
Copy sscanf2.inc and paste it into your pawno\\includes folder.  
If you're using windows, copy sscanf.dll in the plugins folder.(If you don't  
have one, create it).Open up server.cfg and add "sscanf" in the plugins line:  

Code:

plugins sscanf

If you're using linux, copy sscanf.so in the plugins folder.(If you don't have  
one, create it).Open up server.cfg and add "sscanf.so" in the plugins line:  

Code:

plugins sscanf.so

.  
  
**Usage**  
  
Open up your gamemode, at the top of the script include sscanf2 and zcmd:  

pawn Code:

#include <sscanf2>  
#include <zcmd>

This will load all the features of the zcmd and sscanf from pawno\\includes  
into your gamemode so you can use everything it has.(The files that you just copied)  
  
REMEMBER: ZCMD commands should not be inside any callback.Callbacks are the ones already inside of your gamemode, for example:  

pawn Code:

public OnPlayerSpawn(playerid)  
{  
    return 1;  
}

  
So let's scroll all the way down.  
Every command must start with:

pawn Code:

CMD:your\_command(playerid, params\[\])

or

pawn Code:

COMMAND:your\_command(playerid, params\[\])

or the old style:

pawn Code:

command(mycommand, playerid, params\[\])// or cmd(mycommand, playerid, params\[\])

So we will use the

pawn Code:

CMD:your\_command(playerid, params\[\])

way.  
  
So, the params are the parameters string while playerid is an ID of the player  
who execute this command.(Sends)  
  
**NOTE: You can also use "o" instead of "params", example:**  

pawn Code:

CMD:your\_command(playerid, o\[\])  
{  
    // Here will be our code.  
    return 1;  
}

So let's start doing a basic command without using the params.  

pawn Code:

CMD:helpme(playerid, params\[\])  
{  
    // Here will be our code.  
    return 1;  
}

This is an example of the command: "/helpme".Let's add just some message:  

pawn Code:

CMD:helpme(playerid, params\[\])  
{  
    SendClientMessage(playerid, 0xFFFFFFF, "My first command ^^ ");  
    return 1;  
}

This will send

Code:

My first command ^^

message to the one who execute /helpme.  
Note: I added the color " 0xFFFFFFF " as default, you add there what color you want(not hex).  
Now, let's also use sscanf, let's start by creating a /heal \[PlayerID\] command.  

pawn Code:

CMD:heal(playerid, params\[\])  
{  
    new targetid; //Here we declare the target id.The one on which the command will be executed.  
    if(sscanf(params,"u", targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /heal \[PlayerID\]");  
    /\*We need to split the parameters, "u" is the specifier that stands for Player Name/ID,also  
    sscanf will check if the sender uses the correct usage of the command, if they use something wrong  
    like: " /heal " will return the message above.(Syntax error...)\*/  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to the server!");  
    //This actually will check if the player on which you try to execute the command is connected to the server, if not you will recieve the message above.(That player...)  
    // Notice, before IsPlayerConnected I've put a " ! " this means " NOT ", so if(Not player connected(targetid))... return message, more control structures can be found a little bit more down.  
    SetPlayerHealth(targetid, 100); //Here is the action, this will heal the targeted player, for example:Dave has 30 health, you execute /heal Dave and he will be healed to 100.  
    return 1;  
}

Control Structures: [http://wiki.sa-mp.com/wiki/Control\_Structures#Operators](http://wiki.sa-mp.com/wiki/Control_Structures#Operators)  
So when we use sscanf in a command we always must use this formula:

pawn Code:

if(sscanf(params,

after that, you must choose your specifier that you will put in the inverted commas:

pawn Code:

" specifier\_here "

then it should be followed by a comma,then contain the parameters after the comma, followed by 2 brackets so in this case  

pawn Code:

"specifier\_here", targetid))

.  
All the specifiers:  

Цитата:

Сообщение от **\*\*\*\*\*\*** [![Посмотреть сообщение](images/buttons/viewpost.gif)](showthread.php?p=520110#post520110)

Code:

Format					Use
L(true/false)				Optional logical truthity
l					Logical truthity
B(binary)				Optional binary number
b					Binary number
N(any format number)			Optional number
n					Number
C(character)				Optional character
c					Character
I(integer)				Optional integer
i					Integer
D(integer)				Optional integer
d					Integer
H(hex value)				Optional hex number
h					Hex number
O(octal value)				Optional octal value
o					Octal value
F(float)				Optional floating point number
f					Floating point number
G(float/INFINITY/-INFINITY/NAN/NAN\_E)	Optional float with IEEE definitions
g					Float with IEEE definitions
{					Open quiet section
}					Close quiet section
P<delimiter>				Invalid delimiter change
p<delimiter>				Delimiter change
Z(string)\[length\]			Invalid optional string
z(string)\[length\]			Deprecated optional string
S(string)\[length\]			Optional string
s\[length\]				String
U(name/id)				Optional user (bot/player)
u					User (bot/player)
Q(name/id)				Optional bot (bot)
q					Bot (bot)
R(name/id)				Optional player (player)
r					Player (player)
A<type>(default)\[length\]		Optional array of given type
a<type>\[length\]				Array of given type
E<specification>(default)		Optional enumeration of given layout
e<specification>			Enumeration of given layout
'string'				Search string
%					Deprecated optional specifier prefix

Okay, so we got this:  

pawn Code:

CMD:heal(playerid, params\[\])  
{  
    new targetid;  
    if(sscanf(params,"u", targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /heal \[PlayerID\]");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to the server!");  
    SetPlayerHealth(targetid, 100);  
    return 1;  
}

  
Now, if you want to have 2 different commands, but you want them to do the same thing, let's say for example the command that we just created "/heal " to do the same thing as "/healplayer", we have just to do this:  

pawn Code:

CMD:healplayer(playerid, params\[\])  
{  
  return cmd\_heal(playerid, params);  
}

And voila, /healplayer will do the same thing as /heal.  
  
Now, let's create a command with more parameters, for example, /givemoney.So we will start with this:  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    //Here will be our codes  
    return 1;  
}

Let's declare the targetid and the ammount of money to give.  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid;  
    new ammount;  
    return 1;  
}

For the simple way, you can just make it in 1 line, like this:  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid, ammount;  
    return 1;  
}

Now we gonna have a look at \*\*\*\*\*\* post with the specifiers.So " i " and/or " d " stands for Integer, we will use that for the money.Let's split the parameters.  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid, ammount;  
    if(sscanf(params,"ui", targetid, ammount)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /givemoney \[PlayerID\] \[Ammount\]");  
    return 1;  
}

So I added "u" for the targetid/name and "i" for the ammount of money you will give.  
As you see, when you use multiple specifiers, you don't need space between them, you just put them inside the inveted commas,

pawn Code:

" specifier\_here\_specifier\_here "

.  
Let's make this command only for RCON Admins.For that you gotta check if the player is logged into rcon with:

pawn Code:

IsPlayerAdmin

So:  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid, ammount;  
    if(sscanf(params,"ui", targetid, ammount)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /givemoney \[PlayerID\] \[Ammount\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"Error: This command is only for RCON Admins");  
    return 1;  
}

So, I used again " ! ", that means NOT, so if the player isn't logged into rcon he will recieve the message above.(Error:This command...)  
Now, let's check if the player who we want to give money(targetid) is online on your server, so we do it like we did in the /heal command.  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid, ammount;  
    if(sscanf(params,"ui", targetid, ammount)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /givemoney \[PlayerID\] \[Ammount\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"Error: This command is only for RCON Admins");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server!");  
    return 1;  
}

Now last thing we gotta do is use the function

pawn Code:

GivePlayerMoney

.  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid, ammount;  
    if(sscanf(params,"ui", targetid, ammount)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /givemoney \[PlayerID\] \[Ammount\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"Error: This command is only for RCON Admins");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server!");  
    GivePlayerMoney(targetid, ammount); // So it will give the targetid the ammount you want.  
    return 1;  
}

Done with that, what about a /ooc command (ooc chat)?So we start with the zcmd formula.  

pawn Code:

CMD:ooc(playerid, params\[\])  
{  
    return 1;  
}

Sscanf have isnull in-build code.We will use the parameters for the text.So we gotta check if the parameters are null, also declare the sendername(the one who will execute the command) and the string.  
You don't know what's a string? You can find out more here:[http://wiki.sa-mp.com/wiki/Scripting\_Basics#Strings](http://wiki.sa-mp.com/wiki/Scripting_Basics#Strings)  

pawn Code:

CMD:ooc(playerid, params\[\])  
{  
    new sendername\[MAX\_PLAYER\_NAME\], string\[56\];  
    return 1;  
}

The

pawn Code:

string\[56\]

declares a new string with enough space for 55 characters.  
The variable called "sendername\[MAX\_PLAYER\_NAME\]" will hold the name of the player. The variable has an array (\[MAX\_PLAYER\_NAME\]). MAX\_PLAYER\_NAME it's 24.24 is the maximum name lenght in SA-MP.  
An array is lots of variables (where you store data to read and write) clumped together to store lots of data at once.  
Now we have to get the sender's name with the function

pawn Code:

GetPlayerName

pawn Code:

CMD:ooc(playerid, params\[\])  
{  
    new sendername\[MAX\_PLAYER\_NAME\], string\[56\];  
    GetPlayerName(playerid, sendername, sizeof(sendername));  
    return 1;  
}

The script will get the player's name that executes the command.  
The "sizeof(sendername)" it gets the size of the array in the variable called "sendername" which in this case is MAX\_PLAYER\_NAME.(24)  
Now, let's check if the params are null.  

pawn Code:

CMD:ooc(playerid, params\[\])  
{  
    new sendername\[MAX\_PLAYER\_NAME\], string\[56\];  
    GetPlayerName(playerid, sendername, sizeof(sendername));  
    if(isnull(params)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /ooc \[text\]"); // This will check if the player types just: "/ooc" he will get the following syntax message.  
    return 1;  
}

Let's format the message that will be send to all players online.  

pawn Code:

CMD:ooc(playerid, params\[\])  
{  
    new sendername\[MAX\_PLAYER\_NAME\], string\[56\];  
    GetPlayerName(playerid, sendername, sizeof(sendername));  
    if(isnull(params)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /ooc \[text\]");  
    format(string, sizeof(string), "(( %s: %s ))", sendername, params);  
    return 1;  
}

This will store the message in the variable "string".  
"sizeof(string)" will get the size of the string, in this case we declared it 56.  
"%s" is a placeholder for the player's name and the second will be the result.  
In the end we added "sendername", this is the variable containing the player's name and "params" for the result.  
So, it will tell the script that "%s" is a placeholder for player's name, and the second will be the result, let's now send the message to all online players with the fuction:

pawn Code:

SendClientMessageToAll

pawn Code:

CMD:ooc(playerid, params\[\])  
{  
    new sendername\[MAX\_PLAYER\_NAME\], string\[56\];  
    GetPlayerName(playerid, sendername, sizeof(sendername));  
    if(isnull(params)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /ooc \[text\]");  
    format(string, sizeof(string), "(( %s: %s ))", sendername, params);  
    SendClientMessageToAll(0xFFFFFFF, string);  
    return 1;  
}

So, the format would be:

pawn Code:

SendClientMessageToAll(color, "message");

But, instead of typing the message we inserted our formatted message stored in the variable "string".  
Done, the command it's finished, what about typing "/o \[text\]" instead of "/ooc \[text\]" ? As I showed above:  

pawn Code:

CMD:o(playerid, params\[\])  
{  
  return cmd\_ooc(playerid, params);  
}

So for example if Dave types: " /o Hello " it will appear like this:  

Code:

(( Dave: Hello ))

Remember, try to make always arrays as small as possible, else it will lag your server.  
Many people use 256 in their arrays,but the maximum length of client messages is 128.Also, don't use 128 if you want the format to be shorter.  
Another placeholders:  

Code:

%b Inserts a number at this position in binary radix
%c Inserts a single character.
%d Inserts an integer (whole) number
%f Inserts a floating point number.
%i Inserts an integer.
%s Inserts a string. ( We used this )
%x Inserts a number in hexadecimal notation.
%% Inserts the literal '%'

Let's try something else now, with more messages, a setskin command only for RCON Admin, so we start:  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    //Here will be our codes  
    return 1;  
}

Let's declare the targetid, skin, sendername, the receivername(the one on which the command will be executed) and the string.  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receivername\[MAX\_PLAYER\_NAME\], string\[128\];  
    return 1;  
}

Now, as you learnt, lets split the parameters and add it only for rcon admins.  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receivername\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    return 1;  
}

Now, since the available skins in samp are only from 1 to 299, lets make it so you can't set someone skin below 1 or more than 299.  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receivername\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    if(skin \> 299 || skin < 1) return SendClientMessage(playerid, 0xFFFFFFF,"Wrong Skin ID! Available ID's: 1-299");  
    return 1;  
}

" || " means OR.Example: "if (Left || Right)".So if Dave tries: "/setskin Dave 352" or "/setskin Dave 0" He will get the following message:"Wrong Skin ID! Available ID's: 1-299".  
Lets now also check if the targetid(the one on which the command will be executed) is on your server.  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receivername\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    if(skin \> 299 || skin < 1) return SendClientMessage(playerid, 0xFFFFFFF,"Wrong Skin ID! Available ID's: 1-299");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server");  
    return 1;  
}

Let's get the sender name, the receiver name and send some message.  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receivername\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    if(skin \> 299 || skin < 1) return SendClientMessage(playerid, 0xFFFFFFF,"Wrong Skin ID! Available ID's: 1-299");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server");  
    GetPlayerName(playerid, sendernamename, sizeof(sendername));  
    GetPlayerName(targetid, receivername,sizeof(receivername));  
    return 1;  
}

Ok, so we got the both player name's, as you learnt above.Now let's format some messages.  

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receiver\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    if(skin \> 299 || skin < 1) return SendClientMessage(playerid, 0xFFFFFFF,"Wrong Skin ID! Available ID's: 1-299");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server");  
    GetPlayerName(playerid, sendernamename, sizeof(sendername));  
    GetPlayerName(targetid, receivername,sizeof(receivername));  
    format(string, sizeof(string),"Your skin have been set to model %d by admin %s", skin, sendername);  
    SeneClientMessage(targetid, 0xFFFFFF, string); // Note, this message will be send to the targetid  
    format(string, sizeof(string),"You have set %s skin to model %d", receivername, skin);  
    SendClientMessage(playerid, 0xFFFFFF, string); // This will be send to the one who execute the command  
    return 1;  
}

If we look up, "%d" insets an integer, and that's what we need to tell the both players in what model id they changed.  
The only thing is new here, it's the operator "||" and the thing to forbidden another numbers, the rest you know.  
Last thing we gotta do, it is to set the target the skin ID the sender want to, so we use the function

pawn Code:

SetPlayerSkin

pawn Code:

CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receiver\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    if(skin \> 299 || skin < 1) return SendClientMessage(playerid, 0xFFFFFFF,"Wrong Skin ID! Available ID's: 1-299");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server");  
    GetPlayerName(playerid, sendernamename, sizeof(sendername));  
    GetPlayerName(targetid, receivername,sizeof(receivername));  
    format(string, sizeof(string),"Your skin have been set to model %d by admin %s", skin, sendername);  
    SeneClientMessage(targetid, 0xFFFFFF, string);  
    format(string, sizeof(string),"You have set %s skin to model %d", receivername, skin);  
    SendClientMessage(playerid, 0xFFFFFF, string);  
    SetPlayerSkin(targetid, skin); // This will set the target the skin ID the sender want to  
    return 1;  
}

**Result**  

pawn Code:

CMD:givemoney(playerid, params\[\])  
{  
    new targetid, ammount;  
    if(sscanf(params,"ui", targetid, ammount)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /givemoney \[PlayerID\] \[Ammount\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"Error: This command is only for RCON Admins");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server!");  
    GivePlayerMoney(targetid, ammount);   
    return 1;  
}  
CMD:ooc(playerid, params\[\])  
{  
    new sendername\[MAX\_PLAYER\_NAME\], string\[56\];  
    GetPlayerName(playerid, sendername, sizeof(sendername));  
    if(isnull(params)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /ooc \[text\]");  
    format(string, sizeof(string), "(( %s: %s ))", sendername, params);  
    SendClientMessageToAll(0xFFFFFFF, string);  
    return 1;  
}  
CMD:heal(playerid, params\[\])  
{  
    new targetid;  
    if(sscanf(params,"u", targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /heal \[PlayerID\]");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to the server!");  
    SetPlayerHealth(targetid, 100);  
    return 1;  
}  
CMD:healplayer(playerid, params\[\])  
{  
  return cmd\_heal(playerid, params);  
}  
CMD:o(playerid, params\[\])  
{  
  return cmd\_ooc(playerid, params);  
}  
CMD:setskin(playerid, params\[\])  
{  
    new targetid, skin, sendername\[MAX\_PLAYER\_NAME\], receiver\[MAX\_PLAYER\_NAME\], string\[128\];  
    if(sscanf(params,"ui", targetid, skin)) return SendClientMessage(playerid, 0xFFFFFFF,"Syntax error.Correct usage: /setskin \[PlayerID\] \[Skinmodel\]");  
    if(!IsPlayerAdmin(playerid)) return SendClientMessage(playerid, 0xFFFFFFF,"This command is only for RCON Admins.");  
    if(skin \> 299 || skin < 1) return SendClientMessage(playerid, 0xFFFFFFF,"Wrong Skin ID! Available ID's: 1-299");  
    if(!IsPlayerConnected(targetid)) return SendClientMessage(playerid, 0xFFFFFFF,"That player is not connected to your server");  
    GetPlayerName(playerid, sendernamename, sizeof(sendername));  
    GetPlayerName(targetid, receivername,sizeof(receivername));  
    format(string, sizeof(string),"Your skin have been set to model %d by admin %s", skin, sendername);  
    SeneClientMessage(targetid, 0xFFFFFF, string);  
    format(string, sizeof(string),"You have set %s skin to model %d", receivername, skin);  
    SendClientMessage(playerid, 0xFFFFFF, string);  
    SetPlayerSkin(targetid, skin);   
    return 1;  
}

  
**References**  
  
Looked a bit on wiki at some stuff.  
  
**Special thanks to:**  
  
\*\*\*\*\*\* for his sscanf.  
Zeex for his zcmd.  
  
**End**  
  
Hope this is usefull for newbies.If you didn't understand something, or I missed anything please reply.

* * *

_Re-added by AceAbhishek, Originally from Samp-froums by Jafet\_Macario ._
