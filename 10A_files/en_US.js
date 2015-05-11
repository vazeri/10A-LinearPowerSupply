Ibles.locale = Ibles.locale || {};

Ibles.locale.errors = {
        incompleteFormError: "Please fill in all required fields.",
        selectNewProfileImage: "Please select a new profile Image.",
        somethingWentWrong: "Oops, something went wrong!",
        somethingImportantWentWrong: "Oops, something went wrong!  Please email service@instructables.com if the problem continues.",
        missingKeys: "The response from our servers is missing information. Email service@instructables.com if the problem persists after refreshing!"
    };
    
Ibles.locale.success = {
        genericSuccess: "Success!"
    };

Ibles.locale.uiElements = {
        faved: "Favorited",
        fave: "Favorite",
        unfavorite: "Unfavorite",
        following: "Following",
        unfollow: "Unfollow",
        follow: "Follow",
        postComment: "Post Comment",
        loading: "Loading...",
        uploadNewImage: "Upload New Image",
        vote:"Vote",
        voted:"Voted",
        by:"by",
        loadMore: "Load More Entries",
        undo:"Undo",
        enter:"Enter",
        entered:"Entered",
        leaveContest:"Leave Contest",
        manageContest:"Manage",
        rangeVoting:"We use range voting -<br/>1 is the lowest, 9 the highest.<br/>Votes are automatically saved.",
        voteWeight:"Vote weight",
        remove:"Remove",
        noEligibleInstructables:"You haven't published any eligible instructables yet.",
        eligibleInstructables:"You have instructables eligible for this contest.",
        logout:"Logout",
        in: "in",
        by: "by",
        whyAddedThisIble:"In 250 characters or less, tell us why you added this Instructable...",
        nowWhat: "Now what?",
        publish: "Publish",
        save: "Save",
        unpublish: "Unpublish",
        preview: "Preview",
        collectionEmpty: "Your collection is empty.",
        closed:"Closed",
        seconds:"s",
        minutes:"min",
        hours:"hours"
    };

    // API Errors use the full-text string for dictionary lookup, since they can't be translated on the fly.
Ibles.locale.iblesAPIResponses = {
        "Invalid email.": "Invalid email.",
        "Email address is already in use!" : "Email address is already in use!",
        "Username already in use.": "Username already in use.",
        "Please enter your email address.": "Please enter your email address.",
        "Sorry, we couldn't find an account for that email address.": "Sorry, we couldn't find an account for that email address.",
        "Please enter your email, not your username.":"Please enter your email, not your username.",
        "Enter an email address.":"Enter an email address.",
        "Sorry, we can't find that account, or your password didn't match.  Please try again!": "Sorry, we can't find that account, or your password didn't match.  Please try again!",
        "Username may only contain letters (a-z), numbers (0-9), spaces, dashes (-), and underscores (_).":"Username may only contain letters (a-z), numbers (0-9), spaces, dashes (-), and underscores (_).",
        "The password reset code is incorrect!":"The password reset code is incorrect!",
        "Please enter a password!":"Please enter a password!",
        "Your password must be at least 3 characters long.": "Your password must be at least 3 characters long.",
        "Load More Comments":"Load More Comments",
        "a few seconds ago":"a few seconds ago",
        "Are you sure you want to delete this comment?":"Are you sure you want to delete this comment?",
        "Are you sure you want to delete this thread?":"Are you sure you want to delete this thread?",
        '"I Made It" comments require images. Uncheck for normal comment.':'"I Made It" comments require images. Uncheck for normal comment.'
    };
