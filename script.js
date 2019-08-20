window.onload = function () {
    var testValidation = function (dto, success, error) {
        console.log("dto....", dto, success, error);
        if (dto.text.indexOf("world") != -1) return success();
        return error();
    };

    const dispatcher = new cf.EventDispatcher();
    dispatcher.addEventListener(
        cf.ChatListEvents.CHATLIST_UPDATED,
        function (event) {
            // console.log("chat list updated...", event);
        },
        false
    );

    var conversationalForm = new cf.ConversationalForm({
        formEl: document.getElementById("form"),
        context: document.getElementById("cf-context"),
        eventDispatcher: dispatcher,
        preventAutoFocus: false,
        flowStepCallback: function (dto, success, error) {
            success();
        },
        submitCallback: function () {
            // remove Conversational Form
            alert("You made it!");
                const scriptURL = 'https://script.google.com/a/entrata.com/macros/s/AKfycbwYm_NDAYSyjeUKCkLFYEhiq6eL10l4iJr-GN7-/exec'
                const form = document.forms['submit-to-google-sheet']
                fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form)
                    })
                    .then(response => console.log('Success!', response))
                    .catch(error => console.error('Error!', error.message))
        }
    });
};
