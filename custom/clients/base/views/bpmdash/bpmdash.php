<?php

$viewdefs['base']['view']['bpmdash'] = array(
     'dashlets' => array(
          array(
               //Display label for this dashlet
               'label' => 'SugarBPM',

               //Description label for this Dashlet
               'description' => 'This dashlet shows all PDs triggered by record',

               'config' => array(),
               'preview' => array(),

               //Filter array decides where this dashlet is allowed to appear
               'filter' => array(
                    //Modules where this dashlet can appear
                    'module' => array(
                         'Contacts',
                         'Accounts',
                         'Leads',
                    ),

                    //Views where this dashlet can appear
                    'view' => array(
                         'record',
                    )
               )
          ),
     ),
);


