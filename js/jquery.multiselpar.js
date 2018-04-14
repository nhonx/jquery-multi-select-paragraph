(function ($) {
    $.fn.pselect = function (command) {
        var _base = this;
        var oHandler = {
            _select: function ($ele) {
                $ele.addClass("parag-selected");
                $ele.find("input").prop("checked", true);
            },
            _deselect: function ($ele) {
                $ele.removeClass("parag-selected");
                $ele.find("input").prop("checked", false);
            },
            _deselectAll: function ($doc) {
                $doc.find(".parag-selected").removeClass("parag-selected");
                $doc.find("input").prop("checked", false);
            },
            _cleanDoc: function () {
                $(_base).removeClass("multi-select-paragraph");
                $(_base).find(".mpar").removeClass("mpar");
            }
        }
        if (!command) {
            oHandler._cleanDoc();
            $(_base).addClass("multi-select-paragraph");
            $(_base).find("p").addClass("mpar").each(function (i) {
                $("<input type='checkbox' name='mpar' id='mp" + i + "'/>").appendTo(this);
            });
            $(_base).find(".mpar").click(function (e) {
                var $ele = $(this);
                var $base = $(_base);
                var isMulti = $base.find("input:checked").length > 1;
                if ($ele.is(".parag-selected")) {
                    if (!e.ctrlKey) {
                        oHandler._deselectAll($base);
                        if (isMulti) {
                            oHandler._select($ele);
                        }
                    } else {
                        oHandler._deselect($ele);
                    }
                } else {
                    if (!e.ctrlKey) oHandler._deselectAll($base);
                    oHandler._select($ele);
                }
            });
        } else {
            if (command == "selectedValues") {
                var result = [];
                $(_base).find("input:checked").each(function () {
                    result.push($(this).attr("id"));
                });
                return result;
            }
            if (command == "selected") {
                return $(_base).find("input:checked").parent();
            }
        }
        return this;
    };
}(jQuery));