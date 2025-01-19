$(document).ready(function () {
    function showError(inputElement, message) {
        $(inputElement).addClass("border-red-500");
        $(inputElement).next(".error-message").text(message).show();
    }

    function hideError(inputElement) {
        $(inputElement).removeClass("border-red-500");
        $(inputElement).next(".error-message").hide();
    }

    $("input, textarea, select").focus(function () {
        hideError(this);
    });

    $("input, textarea, select").blur(function () {
        var inputVal = $(this).val();
        var inputId = $(this).attr("id");

        switch (inputId) {
            case "fullName":
                if (inputVal === "") {
                    showError(this, "Full Name cannot be empty.");
                } else {
                    hideError(this);
                }
                break;

            case "email":
                var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailPattern.test(inputVal)) {
                    showError(this, "Please enter a valid email address.");
                } else {
                    hideError(this);
                }
                break;

            case "phone":
                var phonePattern = /^[0-9]{9,15}$/;
                if (!phonePattern.test(inputVal)) {
                    showError(this, "Please enter a valid phone number.");
                } else {
                    hideError(this);
                }
                break;

            case "subject":
                if (inputVal === "") {
                    showError(this, "Subject cannot be empty.");
                } else {
                    hideError(this);
                }
                break;

            case "message":
                if (inputVal === "") {
                    showError(this, "Message cannot be empty.");
                } else {
                    hideError(this);
                }
                break;

            case "department":
                if (inputVal === "") {
                    showError(this, "Please select a department.");
                } else {
                    hideError(this);
                }
                break;
        }
    });

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        const $form = $(this);
        const $responseMessage = $("#responseMessage");

        let isValid = true;

        $("input, textarea, select").each(function () {
            const inputVal = $(this).val();
            const inputId = $(this).attr("id");

            switch (inputId) {
                case "fullName":
                    if (inputVal === "") {
                        showError(this, "Full Name cannot be empty.");
                        isValid = false;
                    }
                    break;

                case "email":
                    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if (!emailPattern.test(inputVal)) {
                        showError(this, "Please enter a valid email address.");
                        isValid = false;
                    }
                    break;

                case "phone":
                    var phonePattern = /^[0-9]{9,15}$/;
                    if (!phonePattern.test(inputVal)) {
                        showError(this, "Please enter a valid phone number.");
                        isValid = false;
                    }
                    break;

                case "subject":
                    if (inputVal === "") {
                        showError(this, "Subject cannot be empty.");
                        isValid = false;
                    }
                    break;

                case "message":
                    if (inputVal === "") {
                        showError(this, "Message cannot be empty.");
                        isValid = false;
                    }
                    break;

                case "department":
                    if (inputVal === "") {
                        showError(this, "Please select a department.");
                        isValid = false;
                    }
                    break;
            }
        });

        if (!isValid) {
            return;
        }

        $responseMessage.addClass("bg-blue-500");
        $responseMessage.text('Mesaj Gönderiliyor...').show();

        const formData = $form.serialize();

        $.ajax({
            url: "/home/contact",
            type: "POST",
            data: formData,
            success: function (response) {
                $responseMessage.text('Mesaj başarıyla gönderildi!');

                setTimeout(function () {
                    $responseMessage.hide();
                }, 5000);

                $form[0].reset();
            },
            error: function (xhr) {
                $responseMessage.text('Mesaj gönderilirken bir hata oluştu.');

                setTimeout(function () {
                    $responseMessage.hide();
                }, 5000);
            }
        });
    });
});
