Object.defineProperty(String.prototype, 'isNullOrEmpty', {
    value() {
        if (this == null || this.length == 0 || this == 'null') {
            return true;
        }
        return false;
    }
});
