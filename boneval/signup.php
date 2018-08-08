<?php

require('src/LassoLead.php');
require('src/RegistrantSubmitter.php');

/*
 * These variables should only be attached to the request on the server side
 */
$clientId  = '700';
$projectId = '8601';

/*
 * This is a security token and should be kept private and should not be a
 * hidden field on your registration page
 */
$apiKey = 'e{A9XcjXPU';

if (empty($clientId) || empty($projectId) || empty($apiKey)) {
    throw new Exception('Required parameters are not set, please
                       check that your $clientId, $projectId and $apiKey are
                       configured correctly');
}

/*
 * Constructing and submitting a lead:
 * Map your forms fields into the lead object and submit
 */
$lead = new LassoLead($_REQUEST['FirstName'],
    $_REQUEST['LastName'],
    $projectId,
    $clientId),
	$_REQUEST['Emails[Primary]'],;
// $lead->addEmail($_REQUEST['Emails[Primary]']);

$lead->sendAssignmentNotification();
// $lead->setWebsiteTracking("LAS-674305-18", "8FD6985D-D82C-4D4A-AF21-69989C933959");

/**
 * Website Tracking
 *
 * Associated with the submission as follows
 * tracking must be installed on the site and the value from the tracking
 * javascript LassoCRM.tracker.readCookie("ut");
 *
 * $lead->setWebsiteTracking("LAS-674305-18", "8FD6985D-D82C-4D4A-AF21-69989C933959");
 */

$submitter = new RegistrantSubmitter();
$curl      = $submitter->submit('https://api.lassocrm.com/registrants', $lead, $apiKey);
header("Location: http://www.boneval.com/thankyou.html",TRUE,303);

/*
 * ---------------------------------------------------------------
 * Troubleshooting examples
 * ---------------------------------------------------------------
 */

/* Viewing the submission body */
// echo json_encode($lead->toArray());

/* Getting the response servers response code */
// echo curl_getinfo($curl, CURLINFO_HTTP_CODE);

/* Getting all details of the cUrl request */
// print_r(curl_getinfo($curl));
