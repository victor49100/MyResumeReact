import {useState} from "react";
import {Link} from "react-router-dom";


function Accueil(props) {
    const [age, setAge] = useState(22)

    return (
        <>
            <div id="run">
                <div style={{color: '#50fa7b'}}>Moreau_Victor@Pc:~/home</div>
                <div>$ neofetch</div>
            </div>

            <div id="neofetch">
                <div>
                    <pre id="ascii">'
                        {`##*#**+:           ..  ...........  .-=*+-..                          
** ++:      ....        ...... %@...:::=@:::.:*=                      
*++=    .......  ..        .%:.    =@@@@@@@@+:-.::%                   
==  .........  .....     *-.:-+****:#@@@@@@@@@@@.  :=                 
-  ...:::..........    .=:.-+*****@@@@@@@@@@@@@@@:..@@#               
 ..  .::..... ...     *---+**+++=++%%#%**@@@@@@@@==.:@@@              
.. . ..       ...    @-==**=-:.     :=@@@@@@@@@@@@==+@@@@             
....         .....  %@+=-#=--:      .:-==++*=@@@@@==+@@@@%            
....       ....... . %%+*#=%%%#=:  ..:-==+++++++=..@+@@@@@            
...         ...... **%+=%%%+%%+=-::  *:+++++++%#%.....=@@@%           
..     ...    ... =:-%%*+ #:-#*#%-%* #%%#@@@@:+  .....:=+#%           
...  ......   ....*##%%%%--:--###@@%@@@#@@@*%%%%+.:....==##.          
... ........   ..#---%%+%@@+@#*+*%%+##@@#@@@@%*#%%%@@@@@*+#=#         
.   .......     .+@@+-=@@@@*%%#.%%###%@@@@@@@*=*#@@@@%@%@.%=-         
      ...         %@@*#++*%@@=..=#*#%%@@@@@@@@@@@@@@#%%%=-            
           .     #+%%*=-%* *+% %+%%#@@@@@@@@#@@@@@@@@##--             
   .      :*#= + .=+#%%%%* *#+ .#=== +##*@@@@@@@@@@%@@+=-             
  ..       :%#+ .+:*#*%%%*:+%= .%=== --==%@@@@#@@@%@%=-##             
            @%%*%#%#+ #%%%%+%+% %=+== .==%@@@@@%%@-#%%*%#             
...          .:-%%%##:%##%%%%=#.@===-:.=+@@@@@@@*++@%#@**             
.....         :%*%%#%%%%#%=--@=-@@@. = +=@@@@@@*+=*%*@@*              
.....          .#%%%%%%%%=:..@@@:##@@=##@@@@@@*++%%:+%=               
 ....        .%. =%%@%%@%@% .-+@@@*%# .%@@*@@*%+%@@%                  
.....       :%........@%#= +*%=+@@*:  -#:-%@@@*+%++*                  
 .         -%#@%+  ..:++*##%%%==@@@@#%=- +@@@*+-=*.                   
          -#%*%%+ . .#+# *@@@@++@@@@@@@@@@@#*+= %=                    
        +%@@%* **-#:-*=+++**@@*+*@@@@#@@@@#**  +*                     
          **##*%  :*#=  ==++@@@@+@@@@%@%##@@*++                       
@@*%% # :***#@%%  =%@% @#%@==*@@@@@@@@@#@@@@@@*+-                     
@%%%%=*%%@***++:-*+*@@@@@@@@@@@@#@@@@%%@@@@@@@%#*#%                   
+=-= :*%#*++  ... %******+:*@@@@#@%@@@@@@@@@@@@@**                    
***+*****#*+*  =....**#***@@***@@##@@@@@@@@@@@##@@                    
%***#@@@@@@%*#**%+ *******@@@@@@@@@#@@@@@@@@@@@#%*#@@@@*              
*+@@%@@@@@@@#*****+*@@##******@@@@@@@@#@@@@@@@@@@@@##*%@@@@%          
@@@#@%@@@@@@#+**::+%**@@=-+=****#*#%###@@@@@@@@@@@@@@@#**@@@@         
@@#@@@@@@@@##+%**+..-=**@@@++***#####%##@@@@@@@@@@@@@@@%@###@@%##     
@@@@@#%%*****##***+  :=**@@@%***#####%%***@@@@@@@@@@@@@@@%@#@@@@%%    
@@@#@@@@@@@@@@@@++++=::=+**@@%***######****@@@@@@@@@@@@@@#@@@@@@@@@*  
      `}
                    </pre>
                </div>

                <div id="neofetch_result">
                    <br/>
                    <div><span className="ppw">Moreau_Victor</span>@<span className="ppw">Pc</span><br/></div>
                    <div><span>---------------</span><br/></div>
                    <div><span className="ppw">Age </span>: <span id="age">{age}</span> ans<br/></div>
                    <div><span className="ppw">Etudes </span> : Bac+3 => L3 Info <br/></div>
                    <div><span className="ppw">Competences </span> : Java/JavaEE | Javascript | C | Python | SQL<br/>
                    </div>
                    <div><span className="ppw">Email </span> : victor.moreau1906@gmail.com<br/></div>
                    <div><span className="ppw">Mon Git </span> : <a href="https://github.com/victor49100"
                                                                    target="_blank">https://github.com/victor49100</a><br/>
                    </div>
                    <div><span className="ppw">Ville </span> : Angers<br/></div>
                    <div><span className="ppw">Permis </span> : B <br/></div>
                    <div><span className="ppw">OS </span> : Fedora Linux 40 (Workstation Edition) x86_64<br/></div>
                </div>
            </div>

            <div id="run">
                <div style={{color: '#50fa7b'}}>Moreau_Victor@Pc:~/home</div>
                <div className="blinkCursor"></div>
            </div>

            <div>


                <nav>
                    <Link className={"link-styles"}>/A_propos</Link><br/>
                    <Link className={"link-styles"}>/Formations</Link><br/>
                    <Link className={"link-styles"} to="/projet">/Mes_Projets</Link><br/>
                    <Link className={"link-styles"}>/Liens</Link><br/>
                </nav>

            </div>
        </>
    );
}

export default Accueil;
