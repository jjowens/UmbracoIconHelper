# UmbracoIconHelper
This is an helper library to help find the right icon for your document type or plugin.

# NPM Commands

There are three npm commands. Please see packages.json. Only use those npm commands if you have added new icons.

generate-enum - This is a default command. It will export a new file, test.txt to the directory "output".

generate-netframework - This command will export a new file, icon.cs to the NetFramework project folder directory. It will overwrite the file icon.cs

generate-test - This command will export a new file, new file, test.txt to the directory "output".


Those commands sends instructions to the GenerateEnum.js file. It will scan all icons in the icons folder, adds filenames to a list, the list gets cleaned up and then exported it to a new file. The new filenames can be found under a enum class "icons".

The list of filenames will be cleaned up. It will remove the "icon-" prefix and ".svg" suffix. Title case will be applied to the filename e.g. icon-book-alt-2.svg would be IconBookAlt2.

## How to use library

Please add the *.dll, e.g. Umbraco.Helpers.Icons.dll, library to your project. Then make a call to the enum class. You must use the ToFileName to get the correct filename.

Examples:

Console.WriteLine(icons.Microscope.ToFileName());

Console.WriteLine(icons.ArtEasel.ToFileName());

Console.WriteLine(icons.BookAlt2.ToFileName());

will output

icon-microscope

icon-art-easel

icon-book-alt-2