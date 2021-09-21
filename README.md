# UmbracoIconHelper
This is an helper library to help find the right icon for your document type or plugin. I've created those libraries to help every Umbraco developer to find a icon by typing a keyword from the enum list, rather than scanning through the directory.

Those libraries supports ASP.net Framework and ASP.net Core 3.1 websites. 

## NPM Commands

I've added npm commands for myself to retrieve a list of icon filenames before exporting it to a new class file. This saved me a lot of time and effort in typing up over 600 icon filenames! You don't need to use those npm commands, unless there are new icons that have been added to your Umbraco website. Any mis-spelling of filenames are as is, it was retrieved from the file.

There are three npm commands. Please see packages.json. Only use those npm commands if you have added new icons.

***generate-enum*** - This is a default command. It will export a new file, test.txt to the directory "output".

***generate-enum-all*** - This command will run all commands that generates the icons.cs class in the project directory. It will run both generate-core and generate-netframework commands.

***generate-core*** - This command will export a new file, icon.cs to the Core31 project folder directory. It will overwrite the file icon.cs

***generate-netframework*** - This command will export a new file, icon.cs to the NetFramework project folder directory. It will overwrite the file icon.cs

***generate-test*** - For testing purposes only, This command will export a new file, test.txt to the directory "output".

Those commands sends instructions to the GenerateEnum.js file. It will scan all icons in the icons folder, adds filenames to a list, the list gets cleaned up and then exported it to a new file based on a template. The new filenames can be found under a enum class "icons".

The list of filenames will be cleaned up. It will remove the "icon-" prefix and ".svg" suffix. Title case will be applied to the filename e.g. icon-book-alt-2.svg would be IconBookAlt2.

## Templates

Templates are plain text files. This allows us to replace the ICONNAMES placeholder with a list of icon names. Each template are set up for each type of project, Net Framework and Core 3.1. You don't have to worry about those templates.

## How to use library

Please add the *.dll, e.g. Umbraco.Helpers.Icons.dll, library to your project from the distribution folder. Then make a call to the enum class. You must use the ToFileName to get the correct icon name for your Umbraco website.

***NOTE*** If you're using the ASP.Core library version, please add "using Umbraco.Helpers.Icons;" to top of file. This will ensure your ToFileName() extension method will appear. 

Examples:

    Console.WriteLine(icons.Microscope.ToFileName());
    Console.WriteLine(icons.ArtEasel.ToFileName());
    Console.WriteLine(icons.BookAlt2.ToFileName());

will output

    icon-microscope
    icon-art-easel
    icon-book-alt-2

## How it works

When you call the method ToFileName(), i.e. icons.BooksAlt2.ToFileName(), It will initialise a new string, "icon-" and then it will iterate over each character in your choice of icon name.

If it sees that the current character is in UpperCase or a numeric value, it will add a dash before appending the character in lowercase.

 icons.***B***ooks***A***lt***2*** becomes icon-***b***ooks-***a***lt-***2***
