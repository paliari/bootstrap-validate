// Generated by CoffeeScript 1.3.1
(function() {

  $('form[data-validate="yes"]').attr('novalidate', 'novalidate').on('submit', function(submitEvent) {
    var errors;
    errors = [];
    $('input, textarea', $(this)).each(function(i, el) {
      var $helpContainer, $this, error, maxLength, minLength, pattern, required, validateName, value;
      $this = $(this);
      value = $this.val();
      error = false;
      $helpContainer = $this.siblings('.help-inline');
      if ($this.attr('required') || value !== '') {
        validateName = $this.attr('data-validatename') || $this.attr('name') || 'This field';
        required = $this.attr('required') === 'required';
        minLength = parseInt($this.attr('data-minlength'));
        if (isNaN(minLength)) {
          minLength = 0;
        }
        maxLength = parseInt($this.attr('maxlength'));
        if (isNaN(maxLength)) {
          maxLength = false;
        }
        pattern = $this.attr('pattern');
        if (pattern === '') {
          pattern = void 0;
        }
        if (required === true && value === '') {
          errors.push(error = validateName + ' is required');
        }
        if (error === false && pattern !== void 0) {
          if (value.search(new RegExp(pattern, 'g')) === -1) {
            errors.push(error = validateName + ' is invalid');
          }
        }
        if (error === false && minLength !== 0) {
          if (!(value.length >= minLength)) {
            errors.push(error = validateName + ' is too short');
          }
        }
        if (error === false && maxLength !== false) {
          if (!(value.length <= maxLength)) {
            errors.push(error = validateName + ' is too long');
          }
        }
      }
      if (error !== false) {
        $this.closest('.control-group').addClass('error').removeClass('success');
        return $helpContainer.html('<i class="icon-remove-sign icon-red"></i> ' + error);
      } else {
        $this.closest('.control-group').addClass('success').removeClass('error');
        return $helpContainer.html('<i class="icon-ok-sign icon-green"></i>');
      }
    });
    if (errors.length !== 0) {
      submitEvent.stopImmediatePropagation();
      return false;
    }
  });

  $('form[data-validate="yes"]').each(function(i, el) {
    var $form, handlers, validation;
    $form = $(el);
    handlers = $form.data('events').submit;
    validation = handlers.pop();
    return handlers = handlers.splice(0, 0, validation);
  });

}).call(this);