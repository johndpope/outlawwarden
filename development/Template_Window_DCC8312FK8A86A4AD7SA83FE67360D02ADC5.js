ui.UiFactory.customTypes["ui.Window"] = {
  "type": "ui.FreeLayout",
  "controls": [
    {
      "type": "ui.Frame",
      "inheritProperties": true,
      "image": "dropshadow",
      "style": "windowShadow",
      "frame": [0, 0, "100%", "100%"],
      "zIndex": 0,
      "order": 0
    }, {
      "type": "ui.Image",
      "inheritProperties": true,
      "style": "windowTilePattern",
      "frame": [0, 0, "100%", "100%"],
      "opacity": function() {
        var ref;
        return (ref = p.backgroundOpacity) != null ? ref : 255;
      },
      "zIndex": 1,
      "order": 1
    }, {
      "type": "ui.Image",
      "inheritProperties": true,
      "style": "windowStretchPattern",
      "frame": [0, 0, "100%", "100%"],
      "opacity": function() {
        var ref;
        return (ref = p.backgroundOpacity) != null ? ref : 255;
      },
      "zIndex": 2,
      "order": 2
    }, {
      "type": "ui.Frame",
      "inheritProperties": true,
      "style": "windowFrame",
      "frame": [0, 0, "100%", "100%"],
      "zIndex": 3,
      "order": 3,
      "action": function() {
        return p.action;
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBWSxDQUFBLFdBQUEsQ0FBekIsR0FBd0M7RUFDcEMsTUFBQSxFQUFRLGVBRDRCO0VBRXBDLFVBQUEsRUFBWTtJQUNSO01BQ0ksTUFBQSxFQUFRLFVBRFo7TUFFSSxtQkFBQSxFQUFxQixJQUZ6QjtNQUdJLE9BQUEsRUFBUyxZQUhiO01BSUksT0FBQSxFQUFTLGNBSmI7TUFLSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLE1BQVAsRUFBZSxNQUFmLENBTGI7TUFNSSxRQUFBLEVBQVUsQ0FOZDtNQU9JLE9BQUEsRUFBUyxDQVBiO0tBRFEsRUFVUjtNQUNJLE1BQUEsRUFBUSxVQURaO01BRUksbUJBQUEsRUFBcUIsSUFGekI7TUFHSSxPQUFBLEVBQVMsbUJBSGI7TUFJSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLE1BQVAsRUFBZSxNQUFmLENBSmI7TUFLSSxTQUFBLEVBQVcsU0FBQTtBQUFHLFlBQUE7MkRBQXNCO01BQXpCLENBTGY7TUFNSSxRQUFBLEVBQVUsQ0FOZDtNQU9JLE9BQUEsRUFBUyxDQVBiO0tBVlEsRUFtQlI7TUFDSSxNQUFBLEVBQVEsVUFEWjtNQUVJLG1CQUFBLEVBQXFCLElBRnpCO01BR0ksT0FBQSxFQUFTLHNCQUhiO01BSUksT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxNQUFQLEVBQWUsTUFBZixDQUpiO01BS0ksU0FBQSxFQUFXLFNBQUE7QUFBRyxZQUFBOzJEQUFzQjtNQUF6QixDQUxmO01BTUksUUFBQSxFQUFVLENBTmQ7TUFPSSxPQUFBLEVBQVMsQ0FQYjtLQW5CUSxFQTRCUjtNQUNJLE1BQUEsRUFBUSxVQURaO01BRUksbUJBQUEsRUFBcUIsSUFGekI7TUFHSSxPQUFBLEVBQVMsYUFIYjtNQUlJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sTUFBUCxFQUFlLE1BQWYsQ0FKYjtNQUtJLFFBQUEsRUFBVSxDQUxkO01BTUksT0FBQSxFQUFTLENBTmI7TUFPSSxRQUFBLEVBQVUsU0FBQTtlQUFHLENBQUMsQ0FBQztNQUFMLENBUGQ7S0E1QlE7R0FGd0IiLCJzb3VyY2VzQ29udGVudCI6WyJ1aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5XaW5kb3dcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5GcmFtZVwiLFxuICAgICAgICAgICAgXCJpbmhlcml0UHJvcGVydGllc1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcImRyb3BzaGFkb3dcIixcbiAgICAgICAgICAgIFwic3R5bGVcIjogXCJ3aW5kb3dTaGFkb3dcIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIl0sXG4gICAgICAgICAgICBcInpJbmRleFwiOiAwLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5JbWFnZVwiLFxuICAgICAgICAgICAgXCJpbmhlcml0UHJvcGVydGllc1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpbmRvd1RpbGVQYXR0ZXJuXCIsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCJdLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IC0+IHAuYmFja2dyb3VuZE9wYWNpdHkgPyAyNTUsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAxLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5JbWFnZVwiLFxuICAgICAgICAgICAgXCJpbmhlcml0UHJvcGVydGllc1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdHlsZVwiOiBcIndpbmRvd1N0cmV0Y2hQYXR0ZXJuXCIsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBcIjEwMCVcIiwgXCIxMDAlXCJdLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IC0+IHAuYmFja2dyb3VuZE9wYWNpdHkgPyAyNTUsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAyLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkZyYW1lXCIsXG4gICAgICAgICAgICBcImluaGVyaXRQcm9wZXJ0aWVzXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0eWxlXCI6IFwid2luZG93RnJhbWVcIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIl0sXG4gICAgICAgICAgICBcInpJbmRleFwiOiAzLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAzLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogLT4gcC5hY3Rpb25cbiAgICAgICAgfVxuICAgIF1cbn0iXX0=
//# sourceURL=Template_Window_132.js