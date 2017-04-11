class MaskPipeES5 {

  transform(value, selection) {
    let masked = '';
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      if (selection.includes(c)) {
        masked += c;
      } else {
        masked += '*';
      }
    }
    return masked;
  }

}
